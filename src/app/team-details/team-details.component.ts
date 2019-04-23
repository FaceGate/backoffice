import { Component, OnInit } from '@angular/core';

export interface Area {
  id: number;
  name: string;
}

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.scss']
})

export class TeamDetailsComponent implements OnInit {

  areas: Area[] = [
    {id: 1, name: 'M1'},
    {id: 2, name: 'M2'},
    {id: 3, name: 'M3'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
