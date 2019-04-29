import { Component, OnInit } from '@angular/core';
import { Group } from '../class/group/group';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  groups: Group[] =
    [
      {
        "id": 1,
        "name": "Developers",
        "isActive": true,
        "areas": [
          {
            "id": 1,
            "name": "M1",
            "isActive": true,
            "doors": [
              {
                "id": 1
              }
            ]
          }
        ]
      },
      {
        "id": 2,
        "name": "RH",
        "isActive": true,
        "areas": [
          {
            "id": 2,
            "name": "M2",
            "isActive": true,
            "doors": [
              {
                "id": 2
              }
            ]
          }
        ]
      }
    ]

  constructor() { }

  ngOnInit() {
  }
}
