import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../../services/user-detail.service';
import { Observable, count } from 'rxjs';
import { AsyncPipe, CommonModule, JsonPipe, NgFor } from '@angular/common';
import { map } from 'rxjs/operators';
import { DataShareService } from '../../services/data-share.service';
import { NullcheckerService } from '../../services/nullchecker.service';
import { routes } from '../../app.routes';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-homecontainer',
  standalone: true,
  imports: [AsyncPipe, JsonPipe],
  providers: [UserDetailService],
  templateUrl: './homecontainer.component.html',
  styleUrl: './homecontainer.component.scss',
})
export class HomecontainerComponent implements OnInit {
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

  constructor(
    private userDetail: UserDetailService,
    public dataShare: DataShareService,
    public nullChecker: NullcheckerService,
    private router: Router
  ) {}
  postsList$!: Observable<any[]>;

  durationHours: number = 0;
  durationMinutes: number = 0;

  postsArray: string[] = [];
  postsLength: number = 0;

  hasMissingCount: number = 0;
  ngOnInit(): void {
    if (sessionStorage.getItem('refreshToken')) {
      this.postsList$ = this.userDetail.getTime();
      this.postsList$.subscribe((posts) => {
        this.postsArray = posts;
        this.postsLength = posts.length;
        this.checkMissingInfo(this.postsArray);
      });
    }
    const [duration_hours, duration_minutes] = this.dataShare.getDuration();
    this.durationHours += duration_hours;
    this.durationMinutes += duration_minutes;
  }
  hasNullValue(post: any): boolean {
    return (
      !post.from ||
      !post.to ||
      !post.duration ||
      !post.clientname ||
      !post.casenumber ||
      !post.case ||
      !post.typeofwork ||
      !post.description
    );
  }

  updatePost(id: number) {
    this.router.navigate(['/addtask', { id }]);
  }

  checkMissingInfo(posts: any[]): void {
    if (posts.some((post) => this.hasNullValue(post))) {
      this.hasMissingCount += 1;
    }
  }
}
