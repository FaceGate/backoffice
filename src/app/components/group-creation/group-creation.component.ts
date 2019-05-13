import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Group } from 'src/app/class/group/group';
import { ENTER, COMMA } from '@angular/cdk/keycodes';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Area } from 'src/app/class/area/area';
import { MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent } from '@angular/material';
import { startWith, map } from 'rxjs/operators';
import { AreaService } from 'src/app/services/area.service';
import { GroupService } from 'src/app/services/group.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-group-creation',
  templateUrl: './group-creation.component.html',
  styleUrls: ['./group-creation.component.scss']
})
export class GroupCreationComponent implements OnInit {

  public group: Group = new Group;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  areaCtrl = new FormControl;
  filteredAreas: Observable<Area[]>;
  allAreas: Area[];

  @ViewChild('areaInput') areaInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  private id: number;
  private sub: any;

  constructor(private groupService: GroupService, private areaService: AreaService, private router: Router) {
    this.filteredAreas = this.areaCtrl.valueChanges.pipe(
      startWith(null),
      map((name: string | null) => name ? this._filter(name) : this.allAreas.slice()));
  }

  ngOnInit() {
    this.allAreas = this.areaService.getAreas();
  }

  addArea(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.areaCtrl.setValue(null);
    }
  }

  selectArea(event: MatAutocompleteSelectedEvent): void {
    if (this.group.areas.indexOf(event.option.value) === -1) {
      this.group.areas.push(event.option.value);
    }
    this.areaInput.nativeElement.value = '';
    this.areaCtrl.setValue(null);
  }

  removeArea(area: Area): void {
    const index = this.group.areas.indexOf(area)

    if (index >= 0) {
      this.group.areas.splice(index, 1);
    }
  }

  createGroup() {
    if (this.groupService.addGroup(this.group)) {
      console.log("Group created !");
      this.router.navigate(["/groups"]);
    } else {
      console.log("Group creation failed !");
    }
  }

  private _filter(value: string): Area[] {
    return this.allAreas.filter(area => area.name.toLowerCase().indexOf(value) === 0);
  }

}
