import { Component, OnInit } from '@angular/core';

export interface Area {
  id: number;
  name: string;
}

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})

export class GroupDetailsComponent implements OnInit {

  areas: Area[] = [
    {id: 1, name: 'M1'},
    {id: 2, name: 'M2'},
    {id: 3, name: 'M3'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
