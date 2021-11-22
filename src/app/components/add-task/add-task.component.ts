import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean | undefined;
  subscription: Subscription | undefined;



  constructor(private uiService: UiServiceService) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    })
  }



  ngOnInit(): void {
  }

  //Submit form

  onSubmit() {
    if (!this.text) {
      alert('Title cannot be empty');
      return
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);



    this.text = '';
    this.reminder = false;
    this.day = '';

  }

}
