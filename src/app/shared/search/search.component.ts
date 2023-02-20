import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  filterNom: string = ''
  @Output() term:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {

  }


  search():void{
    this.term.emit(this.filterNom);
  }


}
