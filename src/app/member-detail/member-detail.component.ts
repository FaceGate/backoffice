import { Component, OnInit, OnDestroy, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import Member from '../class/member/member';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent } from '@angular/material';
import { map, startWith } from 'rxjs/operators';
import { Group } from '../class/group/group';

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
      "firstName": "John",
      "lastName": "Doe",
      "expirationDate": "2019-04-19T17:17:12+0200",
      "profilePictures": [
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
      "isActive": true,
      "groups": [
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
    },
    {
      "id": 2,
      "firstName": "John",
      "lastName": "Doe",
      "expirationDate": "2019-04-19T17:17:12+0200",
      "profilePictures": [
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
      "isActive": true,
      "groups": [
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
    },
    {
      "id": 3,
      "firstName": "John",
      "lastName": "Doe",
      "expirationDate": "2019-04-19T17:17:12+0200",
      "profilePictures": [
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
      "isActive": true,
      "groups": [
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
    },
    {
      "id": 4,
      "firstName": "John",
      "lastName": "Doe",
      "expirationDate": "2019-04-19T17:17:12+0200",
      "profilePictures": [
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
      "isActive": true,
      "groups": [
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
    },
    {
      "id": 5,
      "firstName": "John",
      "lastName": "Doe",
      "expirationDate": "2019-04-19T17:17:12+0200",
      "profilePictures": [
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
      "isActive": true,
      "groups": [
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
    },
    {
      "id": 6,
      "firstName": "John",
      "lastName": "Doe",
      "expirationDate": "2019-04-19T17:17:12+0200",
      "profilePictures": [
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
      "isActive": true,
      "groups": [
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
    }
  ]
  separatorKeysCodes: number[] = [ENTER, COMMA];
  groupCtrl = new FormControl;
  filteredGroups: Observable<Group[]>;
  groups: Group[] = [];
  allgroups: Group[] = [
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
  ];

  @ViewChild('groupInput') groupInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  private id: number;
  private sub: any;


  constructor(public route: ActivatedRoute) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
    })

    this.filteredGroups = this.groupCtrl.valueChanges.pipe(
      startWith(null),
      map((name: string | null) => name ? this._filter(name) : this.allgroups.slice()));
  }

  ngOnInit() {
    this.member = this.getMember(this.id);
    this.groups = this.getMemberGroup(this.id);
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

      this.groupCtrl.setValue(null);
    }
  }

  select(event: MatAutocompleteSelectedEvent): void {
    if(this.groups.indexOf(event.option.value) === -1) {
      this.groups.push(event.option.value)
    }
    this.groupInput.nativeElement.value = '';
    this.groupCtrl.setValue(null);
  }

  remove(group: Group): void {
    const index = this.groups.indexOf(group);

    if (index >= 0) {
      this.groups.splice(index, 1);
    }
  }

  private getMember(id: number): Member {
    return this.members.filter(member => member.id === id)[0];
  }

  private getMemberGroup(id: number): Group[] {
    return this.members.filter(member => member.id === id)[0].groups;
  }

  private _filter(value: string): Group[] {
    if (typeof value === "string") {
      var filterValue = value.toLowerCase();
    }
    return this.allgroups.filter(group => group.name.toLowerCase().indexOf(filterValue) === 0);
  }
}
