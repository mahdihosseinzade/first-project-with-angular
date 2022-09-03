import { Component, Input, OnInit } from '@angular/core';

interface student {
  name : string,
  scores : number
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  // studentsList:Array<student>=[
  //   {
  //     name:"ali",
  //     scores : 10
  //   }
  // ]

  @Input () studentsList : Array<student> = [];

  ngOnInit(): void {
  
  }

}
