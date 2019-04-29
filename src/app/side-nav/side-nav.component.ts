import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @Output() sidenavToggle = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  toggleSidenav() {
    this.sidenavToggle.emit(true);
  }

}
