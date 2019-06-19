import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  protected API = 'http://localhost:3000/api/';

  constructor(
    private http: HttpClient
  ) { }

  async getHeaders() {
    const h = await {
      'Content-Type': 'application/json'
    };
    return await h;
  }

  GET(url) {
    return this.http.get(`${this.API}${url}`, httpOptions).toPromise();
  }

  POST(url, params) {
    return this.http.post(`${this.API}${url}`, params, httpOptions).toPromise();
  }

  PUT(url, params) {
    return this.http.put(`${this.API}${url}`, params, httpOptions).toPromise();
  }

  DELETE(url) {
    return this.http.delete(`${this.API}${url}`, httpOptions).toPromise();
  }
}
