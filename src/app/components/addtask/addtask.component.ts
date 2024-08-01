import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { UserDetailService } from '../../services/user-detail.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TestComponent } from '../test/test.component';

@Component({
  selector: 'app-addtask',
  standalone: true,
  imports: [RouterLink, FormsModule,TestComponent],
  providers: [UserDetailService],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.scss',
})
export class AddtaskComponent {
  constructor(private userDetail: UserDetailService) {}

  //  submit button
  submit() {}
}
