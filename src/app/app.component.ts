import { Component, OnInit } from '@angular/core';
import { ToDoService } from './service/to-do.service';
import { IData } from './interface/data';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [CommonModule , ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  list: IData[]= []
  form!: FormGroup;

  constructor(private _toDo: ToDoService){
    this.form = new FormGroup({
      taskName: new FormControl(''),
      taskDescription: new FormControl(''),
      tags: new FormControl('')
    });
  }

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

createNewTask() {
    const now = new Date().toISOString();

    const body: IData = {
      itemId: 0,
      taskName: this.form.value.taskName,
      taskDescription: this.form.value.taskDescription,
      tags: this.form.value.tags,
      dueDate: now,
      createdOn: now,
      completedOn: now,
      isCompleted: false
    };

    this._toDo.createNewTasks(body).subscribe({
      next: (res) => {
        console.log('Task Created:', res);
        this.getAllTasks();
        this.form.reset();
        alert(res.message);
      },
      error: (err) => {
        console.error('Error in Creating Task', err);
      }
    });
  }
}
