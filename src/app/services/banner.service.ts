import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class BannerService {
  constructor(public http: HttpClient) {}

  getBanners(url: string) {
    // let header = new HttpHeaders().set('Type-content', 'aplication/json');

    return this.http.get(url);
  }
}
