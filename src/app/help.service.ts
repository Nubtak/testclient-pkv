import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
  helpcontent;

  constructor(private http: HttpClient) { }

  getHelpContent() {
    return this.http.get('/assets/help.json');
  }
}