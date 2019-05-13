import {Injectable} from '@angular/core';
import {Member} from '../class/member/member';
import {Group} from '../class/group/group';
import {ERRORS} from '../constants/errors';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  member: Member;
  members: Member[] = [
    {
      id: 1,
      firstName: 'Alexis',
      lastName: 'Petrillo',
      expirationDate: new Date('Sat Apr 07 2019 00:00:00 GMT+0200 (heure d’été d’Europe centrale)'),
      profilePictures: [
        {
          id: 1,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626695/Facegate/images_sriewy.jpg'
        },
        {
          id: 2,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626695/Facegate/images_sriewy.jpg'
        },
        {
          id: 3,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626695/Facegate/images_sriewy.jpg'
        }
      ],
      isActive: true,
      groups: [
        {
          id: 1,
          name: 'Developers',
          isActive: true,
          areas: [
            {
              id: 1,
              name: 'M1',
              isActive: true,
              doors: [
                {
                  id: 1
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'RH',
          isActive: true,
          areas: [
            {
              id: 2,
              name: 'M2',
              isActive: true,
              doors: [
                {
                  id: 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 2,
      firstName: 'Pierre',
      lastName: 'Simon',
      expirationDate: new Date('Sat Apr 06 2019 00:00:00 GMT+0200 (heure d’été d’Europe centrale)'),
      profilePictures: [
        {
          id: 1,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626691/Facegate/Profil-Jean_format_360x360_unc9ps.jpg'
        },
        {
          id: 2,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626691/Facegate/Profil-Jean_format_360x360_unc9ps.jpg'
        },
        {
          id: 3,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626691/Facegate/Profil-Jean_format_360x360_unc9ps.jpg'
        }
      ],
      isActive: true,
      groups: [
        {
          id: 1,
          name: 'Developers',
          isActive: true,
          areas: [
            {
              id: 1,
              name: 'M1',
              isActive: true,
              doors: [
                {
                  id: 1
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'RH',
          isActive: true,
          areas: [
            {
              id: 2,
              name: 'M2',
              isActive: true,
              doors: [
                {
                  id: 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Doe',
      expirationDate: new Date('Sat Apr 06 2019 00:00:00 GMT+0200 (heure d’été d’Europe centrale)'),
      profilePictures: [
        {
          id: 1,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626674/Facegate/t%C3%A9l%C3%A9chargement_d1qfwr.jpg'
        },
        {
          id: 2,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626674/Facegate/t%C3%A9l%C3%A9chargement_d1qfwr.jpg'
        },
        {
          id: 3,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626674/Facegate/t%C3%A9l%C3%A9chargement_d1qfwr.jpg'
        }
      ],
      isActive: true,
      groups: [
        {
          id: 1,
          name: 'Developers',
          isActive: true,
          areas: [
            {
              id: 1,
              name: 'M1',
              isActive: true,
              doors: [
                {
                  id: 1
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'RH',
          isActive: true,
          areas: [
            {
              id: 2,
              name: 'M2',
              isActive: true,
              doors: [
                {
                  id: 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Doe',
      expirationDate: new Date('Sat Apr 06 2019 00:00:00 GMT+0200 (heure d’été d’Europe centrale)'),
      profilePictures: [
        {
          id: 1,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626963/Facegate/profile_qpvlsi.jpg'
        },
        {
          id: 2,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626963/Facegate/profile_qpvlsi.jpg'
        },
        {
          id: 3,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626963/Facegate/profile_qpvlsi.jpg'
        }
      ],
      isActive: true,
      groups: [
        {
          id: 1,
          name: 'Developers',
          isActive: true,
          areas: [
            {
              id: 1,
              name: 'M1',
              isActive: true,
              doors: [
                {
                  id: 1
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'RH',
          isActive: true,
          areas: [
            {
              id: 2,
              name: 'M2',
              isActive: true,
              doors: [
                {
                  id: 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 5,
      firstName: 'John',
      lastName: 'Doe',
      expirationDate: new Date('Sat Apr 06 2019 00:00:00 GMT+0200 (heure d’été d’Europe centrale)'),
      profilePictures: [
        {
          id: 1,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626965/Facegate/10089523_r4n8nq.jpg'
        },
        {
          id: 2,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626965/Facegate/10089523_r4n8nq.jpg'
        },
        {
          id: 3,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626965/Facegate/10089523_r4n8nq.jpg'
        }
      ],
      isActive: true,
      groups: [
        {
          id: 1,
          name: 'Developers',
          isActive: true,
          areas: [
            {
              id: 1,
              name: 'M1',
              isActive: true,
              doors: [
                {
                  id: 1
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'RH',
          isActive: true,
          areas: [
            {
              id: 2,
              name: 'M2',
              isActive: true,
              doors: [
                {
                  id: 2
                }
              ]
            }
          ]
        }
      ]
    },
    {
      id: 6,
      firstName: 'John',
      lastName: 'Doe',
      expirationDate: new Date('Sat Apr 06 2019 00:00:00 GMT+0200 (heure d’été d’Europe centrale)'),
      profilePictures: [
        {
          id: 1,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626967/Facegate/images_ovmr5l.jpg'
        },
        {
          id: 2,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626967/Facegate/images_ovmr5l.jpg'
        },
        {
          id: 3,
          url: 'https://res.cloudinary.com/esgi/image/upload/v1556626967/Facegate/images_ovmr5l.jpg'
        }
      ],
      isActive: true,
      groups: [
        {
          id: 1,
          name: 'Developers',
          isActive: true,
          areas: [
            {
              id: 1,
              name: 'M1',
              isActive: true,
              doors: [
                {
                  id: 1
                }
              ]
            }
          ]
        },
        {
          id: 2,
          name: 'RH',
          isActive: true,
          areas: [
            {
              id: 2,
              name: 'M2',
              isActive: true,
              doors: [
                {
                  id: 2
                }
              ]
            }
          ]
        }
      ]
    }
  ];

  constructor(private snackBar: MatSnackBar) {
  }

  private checkMemberObject(member: Member): boolean {
    if (!member.firstName || !member.lastName || member.groups.length === 0) {
      this.snackBar.open("Missing Field !", null, {
        duration: 3000,
        verticalPosition: "bottom",
        horizontalPosition: "right"
      });
      return false;
    }
    return true;
  }

  getMembers(): Member[] {
    return this.members;
  }

  getMember(id: number): Member {
    return this.members.find(member => member.id === id);
  }

  getMembersFromGroup(id: number): Member[] {
    return this.members.filter(member => member.groups.filter(group => group.id === id));
  }

  addMember(member: Member): boolean {
    if (this.checkMemberObject(member)) {
      // const errorKey = 'TOO_MANY_FACES';
      // alert(ERRORS[errorKey]);
      if(!member.id && this.members.length > 0) {
        member.id = this.members[this.members.length - 1].id + 1;
      } else {
        member.id = 1;
      }
      this.members.push(member);
      this.snackBar.open(`New joiner: ${member.firstName} ${member.lastName} 🎉`, null, {
        duration: 3000,
        verticalPosition: "bottom",
        horizontalPosition: "right"
      });
      return true;
    }
    return false;
  }

  updateMember(member: Member): void {
    if (this.checkMemberObject(member)) {
      const index = this.members.findIndex(oldMember => oldMember.id === member.id);
      this.members[index] = member;
    }
  }

  removeMember(member: Member): void {
    const index = this.members.indexOf(member);
    this.members.splice(index, 1);
  }
}
