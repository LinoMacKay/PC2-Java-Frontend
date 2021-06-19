import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OutcomeResponse } from '../model/OutcomeResponse';

@Injectable({
  providedIn: 'root',
})
export class OutcomeService {
  URI: string = `${environment.HOST_URL}/outcomes`;
  constructor(private http: HttpClient) {}
  getAllOutcomes() {
    return this.http.get<OutcomeResponse[]>(this.URI);
  }
}
