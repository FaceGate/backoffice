import { Component, OnInit } from '@angular/core';
import { Team } from '../class/team/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  teams: Team[] =
    [
      {
        "id": 1,
        "name": "Developers",
        "is_active": true,
        "areas": [
          {
            "id": 1,
            "name": "M1",
            "is_active": true,
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
        "is_active": true,
        "areas": [
          {
            "id": 2,
            "name": "M2",
            "is_active": true,
            "doors": [
              {
                "id": 2
              }
            ]
          }
        ]
      }
    ]

}
