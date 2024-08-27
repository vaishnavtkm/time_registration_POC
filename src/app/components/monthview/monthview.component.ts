import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { FormControl, FormsModule } from '@angular/forms';
import { DayCarouselComponent } from '../../subcomponents/day-carousel/day-carousel.component';
import { CommonModule } from '@angular/common';
import { UserDetailService } from '../../services/user-detail.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-monthview',
  standalone: true,
  imports: [RouterLink, DayCarouselComponent, FormsModule, CommonModule],
  templateUrl: './monthview.component.html',
  styleUrl: './monthview.component.scss',
})
export class MonthviewComponent implements OnInit {
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

  hasMissingInfo: boolean = false;

  currentMonth: string;
  currentYear: number;
  months: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  calendar: (number | null)[][];

  constructor(private router: Router, private userDetail: UserDetailService) {
    const today = new Date();
    this.currentMonth = this.months[today.getMonth()];
    this.currentYear = today.getFullYear();
    this.calendar = this.generateCalendar(
      today.getMonth(),
      today.getFullYear()
    );
  }
  postsList$!: Observable<any[]>;

  ngOnInit(): void {
    if (sessionStorage.getItem('refreshToken')) {
      this.postsList$ = this.userDetail.getTime();
      this.postsList$.subscribe((posts) => {
        this.checkMissingInfo(posts);
      });
    }
  }

  checkMissingInfo(posts: any[]): void {
    this.hasMissingInfo = posts.some((post) => this.hasNullValue(post));
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
  generateCalendar(month: number, year: number): (number | null)[][] {
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendar: (number | null)[][] = [];
    let week: (number | null)[] = [];

    // Fill the first week with empty days until the first day of the month
    for (let i = 0; i < firstDay; i++) {
      week.push(null);
    }

    // Fill the calendar with the days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      week.push(day);
      if (week.length === 7) {
        calendar.push(week);
        week = [];
      }
    }

    // Fill the last week with empty days if necessary
    if (week.length > 0) {
      while (week.length < 7) {
        week.push(null);
      }
      calendar.push(week);
    }

    return calendar;
  }

  isToday(day: number | null): boolean {
    if (day === null) return false;
    const today = new Date();
    return (
      day === today.getDate() &&
      this.currentMonth === this.months[today.getMonth()] &&
      this.currentYear === today.getFullYear()
    );
  }

  previousMonth(): void {
    let monthIndex = this.months.indexOf(this.currentMonth);
    if (monthIndex === 0) {
      monthIndex = 11;
      this.currentYear--;
    } else {
      monthIndex--;
    }
    this.currentMonth = this.months[monthIndex];
    this.calendar = this.generateCalendar(monthIndex, this.currentYear);
  }

  nextMonth(): void {
    let monthIndex = this.months.indexOf(this.currentMonth);
    if (monthIndex === 11) {
      monthIndex = 0;
      this.currentYear++;
    } else {
      monthIndex++;
    }
    this.currentMonth = this.months[monthIndex];
    this.calendar = this.generateCalendar(monthIndex, this.currentYear);
  }

  goToDayView(): void {
    const monthIndex = this.months.indexOf(this.currentMonth);
    this.router.navigate([
      '/dayview',
      { month: monthIndex, year: this.currentYear },
    ]);
  }
}
