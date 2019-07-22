import {Component, OnInit} from '@angular/core';
import {AreaService} from '../../services/area.service';
import {Area} from '../../class/area/area';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {
  areas: Area[];

  constructor(private areaService: AreaService) {
  }

  ngOnInit() {
    this.areaService.getAreas().subscribe(
      (res) => {
        this.areas = res;
      }
    )
  }

}
