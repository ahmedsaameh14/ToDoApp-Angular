import { Component, OnInit } from '@angular/core';
import { ToDoService } from './service/to-do.service';
import { IData } from './interface/data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  list: IData[]= []
  constructor(private _toDo: ToDoService){}

  ngOnInit(){
    this.getAllTasks()
  }

  getAllTasks(){
    this._toDo.getAllTasks().subscribe({
      next: (res) => {
        this.list = res.data;
        console.log(this.list);
      },
      error: (err) => {console.error('Error Fetching Tasks' , err);
      }
    })
  }
}
