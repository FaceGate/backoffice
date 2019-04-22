import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import Member from '../class/member/member';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { map, startWith } from 'rxjs/operators';
import { Team } from '../class/team/team';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.scss']
})
export class MemberDetailComponent implements OnInit, OnDestroy {

  member: Member;
  members: Member[] = [
    {
      "id": 1,
      "first_name": "John",
      "last_name": "Doe",
      "expration_date": "2019-04-19T17:17:12+0200",
      "profile_pictures": [
        {
          "id": 1,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/arvponfkoibwhkz3jfao.png"
        },
        {
          "id": 2,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/airudjzk76hdu3lfosiz.png"
        },
        {
          "id": 3,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/dksieo9idpso3odisu6t.png"
        }
      ],
      "is_active": true,
      "teams": [
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
    },
    {
      "id": 2,
      "first_name": "John",
      "last_name": "Doe",
      "expration_date": "2019-04-19T17:17:12+0200",
      "profile_pictures": [
        {
          "id": 1,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/arvponfkoibwhkz3jfao.png"
        },
        {
          "id": 2,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/airudjzk76hdu3lfosiz.png"
        },
        {
          "id": 3,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/dksieo9idpso3odisu6t.png"
        }
      ],
      "is_active": true,
      "teams": [
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
    },
    {
      "id": 3,
      "first_name": "John",
      "last_name": "Doe",
      "expration_date": "2019-04-19T17:17:12+0200",
      "profile_pictures": [
        {
          "id": 1,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/arvponfkoibwhkz3jfao.png"
        },
        {
          "id": 2,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/airudjzk76hdu3lfosiz.png"
        },
        {
          "id": 3,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/dksieo9idpso3odisu6t.png"
        }
      ],
      "is_active": true,
      "teams": [
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
    },
    {
      "id": 4,
      "first_name": "John",
      "last_name": "Doe",
      "expration_date": "2019-04-19T17:17:12+0200",
      "profile_pictures": [
        {
          "id": 1,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/arvponfkoibwhkz3jfao.png"
        },
        {
          "id": 2,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/airudjzk76hdu3lfosiz.png"
        },
        {
          "id": 3,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/dksieo9idpso3odisu6t.png"
        }
      ],
      "is_active": true,
      "teams": [
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
    },
    {
      "id": 5,
      "first_name": "John",
      "last_name": "Doe",
      "expration_date": "2019-04-19T17:17:12+0200",
      "profile_pictures": [
        {
          "id": 1,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/arvponfkoibwhkz3jfao.png"
        },
        {
          "id": 2,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/airudjzk76hdu3lfosiz.png"
        },
        {
          "id": 3,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/dksieo9idpso3odisu6t.png"
        }
      ],
      "is_active": true,
      "teams": [
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
    },
    {
      "id": 6,
      "first_name": "John",
      "last_name": "Doe",
      "expration_date": "2019-04-19T17:17:12+0200",
      "profile_pictures": [
        {
          "id": 1,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/arvponfkoibwhkz3jfao.png"
        },
        {
          "id": 2,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/airudjzk76hdu3lfosiz.png"
        },
        {
          "id": 3,
          "url": "http://res.cloudinary.com/FaceGate/image/upload/v1508874121/dksieo9idpso3odisu6t.png"
        }
      ],
      "is_active": true,
      "teams": [
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
  ]
  separatorKeysCodes: number[] = [ENTER, COMMA];
  teamCtrl = new FormControl;
  filteredTeams: Observable<Team[]>;
  teams: Team[] = [];
  allTeams: Team[] = [
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
  ];

  @ViewChild('teamInput') teamInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  private id: number;
  private sub: any;


  constructor(public route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })

    this.filteredTeams = this.teamCtrl.valueChanges.pipe(
      startWith(null),
      map((name: string | null) => name ? this._filter(name) : this.allTeams.slice()));
  }

  ngOnInit() {
    this.member = this.getMember(this.id);
    this.teams = this.getMemberTeam(this.id);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value;

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.teamCtrl.setValue(null);
    }
  }

  select(event: MatAutocompleteSelectedEvent): void {
    if(this.teams.indexOf(event.option.value) === -1) {
      this.teams.push(event.option.value)
    }
    this.teamInput.nativeElement.value = '';
    this.teamCtrl.setValue(null);
  }

  remove(team: Team): void {
    const index = this.teams.indexOf(team);

    if (index >= 0) {
      this.teams.splice(index, 1);
    }
  }

  private getMember(id: number): Member {
    return this.members.filter(member => member.id === id)[0];
  }

  private getMemberTeam(id: number): Team[] {
    return this.members.filter(member => member.id === id)[0].teams;
  }

  private _filter(value: string): Team[] {
    if(typeof value === "string")
      var filterValue = value.toLowerCase();
    return this.allTeams.filter(team => team.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
