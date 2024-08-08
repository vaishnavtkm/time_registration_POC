import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NullcheckerService {
  private nullValueCheckSource = new BehaviorSubject<boolean>(false);
  nullValueCheck$ = this.nullValueCheckSource.asObservable();

  setNullValueCheck(value: boolean) {
    this.nullValueCheckSource.next(value);
  }

  private dataKey = 'myServiceData';

  constructor() {}

  setData(data: any) {
    localStorage.setItem(this.dataKey, JSON.stringify(data));
  }

  getData() {
    const data = localStorage.getItem(this.dataKey);
    return data ? JSON.parse(data) : null;
  }
}
