import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'backoffice';
  events: string[] = [];
  mode: string;
  opened: boolean;

  ngOnInit() {
    this.mode = window.innerWidth > 920 ? 'side' : 'over';
  }

  onResize(event: any, sidenav: MatSidenav) {
    if (event.target.innerWidth < 920) {
      sidenav.close();
      this.mode = 'over';
    } else {
      sidenav.open();
      this.mode = 'side';
    }
  }

}
