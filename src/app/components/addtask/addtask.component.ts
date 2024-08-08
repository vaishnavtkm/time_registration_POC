import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserDetailService } from '../../services/user-detail.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestComponent } from '../test/test.component';
import { DataShareService } from '../../services/data-share.service';
import { NullcheckerService } from '../../services/nullchecker.service';
import { routes } from '../../app.routes';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [RouterLink, FormsModule, TestComponent],
  providers: [UserDetailService],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.scss',
})
export class AddtaskComponent implements OnInit {
  forms = {
    from: '',
    to: '',
    duration: '',
    clientname: '',
    casenumber: '',
    case: '',
    typeofwork: '',
    description: '',
  };
  id: number | null = null;
  constructor(
    private userDetail: UserDetailService,
    private dataShare: DataShareService,
    private nullChecker: NullcheckerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((value) => {
      this.id = value['id'];
      if (this.id) {
        this.patchValues(this.id);
      }
    });
  }

  durationHours: number = 0;
  durationMinutes: number = 0;

  durationCompute() {
    const [fromhours, fromminutes] = this.forms.from.split(':').map(Number);
    const [tohours, tominutes] = this.forms.to.split(':').map(Number);

    // Convert start and end times to minutes
    const fromTotalMinutes = fromhours * 60 + fromminutes;
    const toTotalMinutes = tohours * 60 + tominutes;

    // Calculate the duration in minutes
    let durationMinutes = toTotalMinutes - fromTotalMinutes;

    // Handle cases where the end time is on the next day
    if (durationMinutes < 0) {
      durationMinutes += 24 * 60; // Add 24 hours in minutes
    }

    // Convert duration back to hours and minutes
    const durationHours = Math.floor(durationMinutes / 60);
    const durationRemainingMinutes = durationMinutes % 60;
    if (durationHours < 10) {
      this.forms.duration = `0${durationHours}:${durationRemainingMinutes}`;
    } else {
      this.forms.duration = `${durationHours}:${durationRemainingMinutes}`;
    }

    // console.log(durationHours);

    this.dataShare.setDuration(durationHours, durationRemainingMinutes);
    // for sharing data to the total section

    return `${durationHours} hours ${durationRemainingMinutes} minutes`;
  }

  patchValues(id: number) {
    this.userDetail.getTimeById(id).subscribe((res) => {
      console.log(res);
      if (res) {
        this.forms = {
          from: res.from,
          to: res.to,
          duration: res.duration,
          clientname: res.clientname,
          casenumber: res.casenumber,
          case: res.case,
          typeofwork: res.typeofwork,
          description: res.description,
        };
      }
    });
  }
  //  submit button
  onSubmit() {
    if (this.id) {
      console.log(this.forms);
      this.userDetail
        .updateTime(this.id, { id: this.id, ...this.forms })
        .subscribe((updatedPost) => {
          alert('Details Updated');
        });
    } else {
      this.userDetail.registerTime(this.forms).subscribe((response) => {
        alert('Submitted successfully ');
      });
    }
  }

  deleteForm(id: number) {
    this.userDetail.deleteTime(id).subscribe((deletedItem) => {
      alert('Item deleted');
      this.router.navigate(['/addtask']);
    });
  }
  resetForm(Form: NgForm) {
    Form.resetForm();
  }
}
