import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataShareService {
  private durationHour: number = 0;
  private durationMinute: number = 0;
  constructor() {}

  setDuration(durationhour: number, durationminute: number) {
    this.durationHour = durationhour;
    this.durationMinute = durationminute;
  }

  getDuration() {
    return [this.durationHour, this.durationMinute];
  }
}
