import { Component, OnInit } from '@angular/core';
import Member from '../class/member/member';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {

  constructor() { }

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

  ngOnInit() {
  }

}
