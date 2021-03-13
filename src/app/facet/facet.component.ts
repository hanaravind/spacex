import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-facet',
  templateUrl: './facet.component.html',
  styleUrls: ['./facet.component.scss']
})
export class FacetComponent implements OnInit {
  @Output() facetValue = new EventEmitter();
  
  launchingYear: string[]  = ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', 
  '2016', '2017', '2018', '2019', '2020'];


  constructor() { }

  ngOnInit(): void {
  }

  facetFilter(e) {
    this.facetValue.emit(e.target);
  }

}
