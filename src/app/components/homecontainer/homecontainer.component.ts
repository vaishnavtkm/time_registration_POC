import { Component, OnInit } from '@angular/core';
import { UserDetailService } from '../../services/user-detail.service';
import { Observable } from 'rxjs';
import { AsyncPipe, CommonModule, NgFor } from '@angular/common';

@Component({
  selector: 'app-homecontainer',
  standalone: true,
  imports: [AsyncPipe],
  providers: [UserDetailService, CommonModule, NgFor],
  templateUrl: './homecontainer.component.html',
  styleUrl: './homecontainer.component.scss',
})
export class HomecontainerComponent implements OnInit {
  /**
   *
   */
  constructor(private userDetail: UserDetailService) {}
  postsList$!: Observable<any[]>;
  ngOnInit(): void {
    this.postsList$ = this.userDetail.getTime();
  }
}
