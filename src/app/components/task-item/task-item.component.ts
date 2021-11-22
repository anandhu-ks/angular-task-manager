import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  //Input receiver
  @Input() task: Task | undefined;

  //Eventemitter
  @Output() ondeleteTask: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();



  constructor() {
  }

  ngOnInit(): void {
  }



  // Delete task emitter
  onDelete(task: Task | undefined) {
    this.ondeleteTask.emit(task);
  }

  onToggle(task: Task | undefined) {
    this.onToggleReminder.emit(task);
  }

}
