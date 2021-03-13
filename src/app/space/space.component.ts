import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-space',
  templateUrl: './space.component.html',
  styleUrls: ['./space.component.scss']
})
export class SpaceComponent implements OnInit {
  @Input() spacexData; 
  @Input() dataLoaded;

  constructor() { }

  ngOnInit(): void {
  }

}
