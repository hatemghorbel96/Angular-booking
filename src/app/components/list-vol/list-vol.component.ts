import { Component, OnInit } from '@angular/core';
import { Airline } from 'src/app/model/airline';
import { Vol } from 'src/app/model/vol';
import { AirlineService } from 'src/app/services/airline.service';
import { VolService } from 'src/app/services/vol.service';

@Component({
  selector: 'app-list-vol',
  templateUrl: './list-vol.component.html',
 
})
export class ListVolComponent implements OnInit {
  vols: Vol[] = [];
  airlines:Airline[]=[];
  constructor(private volService: VolService,public airlineService: AirlineService) { }

  ngOnInit(): void {
    this.volService.getAllVol().subscribe(cats => {console.log(cats);
      this.vols = cats;
      }
      );
      this.airlineService.getAllAirline().subscribe(air => {console.log(air);
        this.airlines = air;
        }
        );
  }

}
