import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse, IData } from '../interface/data';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http:HttpClient) { }

  URL = "https://freeapi.miniprojectideas.com/api/JWT/"

  getAllTasks(): Observable<ApiResponse<IData[]>> {
    return this.http.get<ApiResponse<IData[]>>(this.URL + "GetAllTaskList")
  }

  createNewTasks(data: IData): Observable<IData> {
    return this.http.post<IData>(this.URL + "CreateNewTask" , data)
  }

  updateTask(data: IData): Observable<IData>{
    return this.http.put<IData>(this.URL + "UpdateTask" , data)
  }

  deleteTask(id: string):Observable<any>{
    return this.http.delete(`${this.URL} DeleteTask?itemId=${id}`)
  }

}
