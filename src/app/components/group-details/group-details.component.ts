import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AreaService} from '../../services/area.service';
import {ActivatedRoute} from '@angular/router';
import {Group} from '../../class/group/group';
import {GroupService} from '../../services/group.service';
import {Observable} from 'rxjs';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {FormControl} from '@angular/forms';
import {MatAutocomplete, MatChipInputEvent, MatAutocompleteSelectedEvent, MatDatepicker} from '@angular/material';
import {map, startWith} from 'rxjs/operators';
import {Area} from '../../class/area/area';

@Component({
  selector: 'app-group-details',
  templateUrl: './group-details.component.html',
  styleUrls: ['./group-details.component.scss']
})

export class GroupDetailsComponent implements OnInit, OnDestroy {
  group: Group;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  areaCtrl = new FormControl;
  filteredAreas: Observable<Area[]>;
  allAreas: Area[];

  @ViewChild('areaInput') areaInput: ElementRef<HTMLInputElement>;
  @ViewChild(MatDatepicker) datepicker: MatDatepicker<Date>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  private id: number;
  private sub: any;

  constructor(public route: ActivatedRoute, private groupService: GroupService, private areaService: AreaService) {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });

    this.filteredAreas = this.areaCtrl.valueChanges.pipe(
      startWith(null),
      map((name: string | null) => name ? this._filter(name) : this.allAreas.slice()));
  }

  ngOnInit() {
    this.group = this.groupService.getGroup(this.id);
    this.allAreas = this.areaService.getAreas();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
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

  updateGroup(): void {
    this.groupService.updateGroup(this.group);
  }

  private _filter(value: string): Area[] {
    return this.allAreas.filter(area => area.name.toLowerCase().indexOf(value) === 0);
  }

}