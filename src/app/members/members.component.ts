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

  ngOnInit() {
  }

}
