import { Component } from '@angular/core';

interface student {
  name : string,
  scores : number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  
  title : string = 'firstApp';
  searchInput : string ="";

  list:Array<student>= [
    {
      name : "ali",
      scores : 20
    },
    {
      name:"mohsen",
      scores:17
    },
    {
      name : "پژمان",
      scores : 16
    },
    {
      name:"پریسا",
      scores:15
    },
    {
      name : "پویا",
      scores : 20
    },
    {
      name:"mohammad",
      scores:12
    },
    {
      name : "زهرا",
      scores : 10
    },
    {
      name:"حسین",
      scores:13
    },
    {
      name : "mahdi",
      scores : 20
    },
    {
      name:"emad",
      scores:18
    },
  ];

  studentsList : Array<student> = this.list;

  public filterList(searchInput:string){
    
    if(searchInput.trim()){
      this.studentsList = this.list.filter(student=>{
        return student.name.toLowerCase().indexOf(searchInput.toLowerCase()) !==-1
      })
    }
    else{
      this.studentsList = this.list;
    }
    
  }


}
