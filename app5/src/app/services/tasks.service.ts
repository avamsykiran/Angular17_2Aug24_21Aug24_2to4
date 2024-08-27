import { Injectable } from '@angular/core';
import { Task } from '../models/task';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private api:string;

  constructor(private http:HttpClient) {
    this.api=environment.tasksApi;
  }

  getAll(): Observable<Task[]> {
    return this.http.get<Task[]>(this.api);
  }

  getById(id: number): Observable<Task> {
    return this.http.get<Task>(this.api + "/" + id);
  }

  add(task:Task): Observable<Task> {
    return this.http.post<Task>(this.api,task);
  }

  update(task: Task): Observable<Task> {
    return this.http.put<Task>(this.api + "/" + task.id,task);
  }

  deleteById(id: number): Observable<void> {
    return this.http.delete<void>(this.api + "/" + id);
  }
}
