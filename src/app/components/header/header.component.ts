import { Component, OnInit } from '@angular/core';
import { UiServiceService } from 'src/app/services/ui-service.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: String = 'task tracker';
  showAddTask: boolean | undefined;
  subscription: Subscription | undefined;
  constructor(private uiService: UiServiceService, private router: Router) {
    this.subscription = this.uiService.onToggle().subscribe((value) => {
      this.showAddTask = value;
    })
  }





  ngOnInit(): void {

  }

  toggleAddTask() {
    this.uiService.toggleAddTask();

  }

  hasRoute(route: string) {
    return this.router.url === route;
  }

}
