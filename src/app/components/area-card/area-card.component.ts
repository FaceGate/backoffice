import {Component, Input, OnInit} from '@angular/core';
import {AreaService} from '../../services/area.service';
import {Area} from '../../class/area/area';

@Component({
  selector: 'app-area-card',
  templateUrl: './area-card.component.html',
  styleUrls: ['./area-card.component.scss']
})
export class AreaCardComponent implements OnInit {
  @Input() area: Area;

  constructor(private areaService: AreaService) {
  }

  ngOnInit() {
  }

  updateArea(area: Area) {
    this.areaService.updateArea(area);
  }

}
