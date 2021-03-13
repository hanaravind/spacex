import { Component, OnInit, OnDestroy } from '@angular/core';
import { BackendService } from './service/backend.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  spacexData: any;
  loading = false;
  developer:string = 'Aravindhan SJ';
  cleanUp: any;
  dataLoaded: boolean = false

  constructor(private http: BackendService) {}

  ngOnInit(): void {
    this.cleanUp = this.http.getHttp().subscribe(data => {
      this.dataLoaded = true
      this.spacexData = data;
    });
    this.dataLoaded = false
  }

  getFilter(val) {
    this.http.getHttp(val.value, val.name).subscribe(data => this.spacexData = data)
  }

ngOnDestroy ():void {
  this.cleanUp.unsubscribe()
}

}
