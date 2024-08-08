import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserDetailService {
  constructor(private http: HttpClient) {}

  baseServerUrl = 'https://localhost:7180/api';

  getTime(): Observable<any[]> {
    return this.http.get<any>(this.baseServerUrl + '/Posts');
  }
  getTimeById(id: number): Observable<any> {
    return this.http.get<any>(this.baseServerUrl + `/Posts/${id}`);
  }

  registerTime(data: any) {
    return this.http.post(this.baseServerUrl + '/Posts/', data);
  }

  updateTime(id: number | string, data: any) {
    return this.http.put(this.baseServerUrl + `/Posts/${id}`, data);
  }
  deleteTime(id: number | string) {
    return this.http.delete(this.baseServerUrl + `/Posts/${id}`);
  }
}
