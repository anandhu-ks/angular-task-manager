import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';


const httpOptions = {
  headers: new HttpHeaders({
    "Content-Type": "application/json"
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }


  //Featch task fro api
  getTasks(): Observable<Task[]> {
    const task = this.http.get<Task[]>(this.apiUrl)
    return task;

  }


  //Delete tasks
  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`
    return this.http.delete<Task>(url);
  }

  //Toggle tasks reminder
  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, httpOptions)
  }

  //Add tasks
  addTask(task:Task):Observable<Task>{
    console.log(task);
    
    return this.http.post(this.apiUrl,task,httpOptions);
  }


}
