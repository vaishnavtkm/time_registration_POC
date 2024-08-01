import { Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { HomecontainerComponent } from './components/homecontainer/homecontainer.component';
import { OverviewComponent } from './components/overview/overview.component';
import { MonthviewComponent } from './components/monthview/monthview.component';
import { DayviewComponent } from './components/dayview/dayview.component';
import { TimetaskComponent } from './components/timetask/timetask.component';
import { AddtaskComponent } from './components/addtask/addtask.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { LoginpageComponent } from './components/loginpage/loginpage.component';
import { TestComponent } from './components/test/test.component';

export const routes: Routes = [
  { path: 'home', component: HomecontainerComponent },
  { path: 'month', component: MonthviewComponent },
  { path: 'day', component: DayviewComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'timetask', component: TimetaskComponent },
  { path: 'addtask', component: AddtaskComponent },
  { path: 'userprofile', component: UserprofileComponent },
  { path: '', component: LoginpageComponent },
  { path: 'datepick', component: TestComponent },
];
