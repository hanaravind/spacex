import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
spacexEndpoint: string;
  constructor(private http: HttpClient) {
    this.spacexEndpoint = 'https://api.spacexdata.com/v3/launches?limit=100'
  }

  getHttp(value?, name?) {
    const searchParams = new URLSearchParams(this.spacexEndpoint);
    if (this.spacexEndpoint.includes(`&${name}=`)) {
       searchParams.set(name, value)
       this.spacexEndpoint = decodeURIComponent(searchParams.toString())
    } else if (value){
       this.spacexEndpoint += `&${name}=${value}`
    } else {
       this.spacexEndpoint = this.spacexEndpoint
    }
    return this.http.get(this.spacexEndpoint)
  }
}
