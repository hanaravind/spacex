import { Component, OnInit } from '@angular/core';
import { BackendService } from './service/backend.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  spacexData;
  loading = false;
  constructor(private http: BackendService) {}
  ngOnInit(): void {
    this.http.getHttp().subscribe(data => {
      this.spacexData = data;
    });
  }
  getFilter(val) {
    this.http.getHttp(val.value, val.name).subscribe(data => this.spacexData = data)
  }

}
