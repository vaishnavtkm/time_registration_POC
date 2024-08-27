import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DropdownServiceService {
  private jsonUrl = 'assets/options.json';
  constructor(private httpClient: HttpClient) {}

  getDropDownOptions(): Observable<any> {
    return this.httpClient.get<any>(this.jsonUrl);
  }
}
