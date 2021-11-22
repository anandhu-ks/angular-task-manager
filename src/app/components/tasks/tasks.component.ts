import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';



@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((task) => {
      this.tasks = task;

    });
  }

  //Delete a task
  deleteTask(task: Task) {

    this.taskService.deleteTask(task).subscribe(() => {
      this.tasks = this.tasks.filter((t) => {
        return t.id !== task.id
      })



    })
  }

  //Toggle task reminder
  toggleReminder(task: Task) {
    task.reminder = !task?.reminder;
    this.taskService.updateTaskReminder(task).subscribe();

  }


  //Add new task
  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task)=>{
      this.tasks.push(task)
    });

  }

}
