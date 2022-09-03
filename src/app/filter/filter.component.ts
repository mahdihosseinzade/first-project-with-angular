import { Component, OnInit, Output ,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  @Output() searchInput = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  public onInputChange(e:Event) {
    this.searchInput.emit((<HTMLInputElement>e.target).value);
  }

}
