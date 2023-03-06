import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Airline } from 'src/app/model/airline';

import { Vol } from 'src/app/model/vol';
import { AirlineService } from 'src/app/services/airline.service';
import { VolService } from 'src/app/services/vol.service';

@Component({
  selector: 'app-vol',
  templateUrl: './vol.component.html',
  styleUrls: ['./vol.component.css']
})
export class VolComponent implements OnInit {
  vols: Vol[] = [];
  airlines:Airline[]=[];
  oc: Vol[] = [];
 
  commentFormGroup!: FormGroup;
  test!:number;
  filters: string[] = []
  filtersAir: string[] = []
  stopsFilter: string[] = []
  valuemin = '0';
  valuemax = '';
  value = '';
  vg:number = 0 ;

  countries = new Set();
  stopslist = new Set();
  constructor(private volService: VolService, public airlineService: AirlineService, private fb: FormBuilder) { 
   
  }

  ngOnInit(): void {
    
    this.volService.getAllVol().subscribe(cats => {console.log(cats);
      this.vols = cats;
      //HAZIT LISTA MTE3 COUNTRIES
      for (let v of this.vols) {
        this.countries.add(v.volTo);
      }
      //stops
      for (let v of this.vols) {
        this.stopslist.add(v.stops);
      }
      }
      );
      this.airlineService.getAllAirline().subscribe(air => {console.log(air);
        this.airlines = air;
        }
        );

  }

  handleSearchprice() {

    const max: string = this.valuemax;
    const min: string = this.valuemin;
   
    this.volService.searchByPrix(max,min).subscribe(
      datavol => {
        this.vols = datavol;
      }
    )
  }

  getVolsToDisplay() {
   /*  return this.filters.length > 0 ? this.vols.filter(v => this.filters.includes(v.airline.idairline.toString())) : this.vols; */
   /*  return this.filters.length > 0 ? this.vols.filter(v => this.filters.includes(v.volTo)) : this.vols; */
    let filteredVols = this.vols;
    if (this.filters.length > 0) {
      filteredVols = filteredVols.filter(vol => this.filters.includes(vol.volTo));
    }
    if (this.filtersAir.length > 0) {
      filteredVols = filteredVols.filter(vol => this.filtersAir.includes(vol.airline.idairline.toString()));
    }
    if (this.stopsFilter.length > 0) {
      filteredVols = filteredVols.filter(vol => this.stopsFilter.includes(vol.stops));
      console.log(filteredVols.length)
    }
    return filteredVols;
  }

  ModifyFilterdCountry(filter, checked) {
    if (!checked && this.filters.length == 1) {
      this.filters = [];
    }
    else if (checked) {
      this.filters.push(filter);
    }
    else {
      this.filters.splice(this.filters.indexOf(filter), 1)
    }
  }

  ModifyFilterstops(filter, checked) {
    if (!checked && this.stopsFilter.length == 1) {
      this.stopsFilter = [];
    }
    else if (checked) {
      this.stopsFilter.push(filter);
    }
    else {
      this.stopsFilter.splice(this.stopsFilter.indexOf(filter), 1)
    }
  }


  ModifyFilterAirline(filter, checked) {
    if (!checked && this.filtersAir.length == 1) {
      this.filtersAir = [];
    }
    else if (checked) {
      this.filtersAir.push(filter);
    }
    else {
      this.filtersAir.splice(this.filtersAir.indexOf(filter), 1)
    }
  }
  

  calculatehours(data1: Date, data2: Date) {
    let date = new Date(data1);
    let datefou9 = new Date(data2);
    //let currentDate = new Date();
    console.log('data', date)
    console.log('data2', datefou9)
    const msBetweenDates = datefou9.getTime() - date.getTime();
 
    return this.convertMsToTime(msBetweenDates)
  }

padTo2Digits(num) {
  return num.toString().padStart(2, '0');
}

 convertMsToTime(milliseconds: number) {
  let seconds = Math.floor(milliseconds / 1000);
  let minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds = seconds % 60;
  minutes = minutes % 60;

 
  // h:m:s

  /*  return `${this.padTo2Digits(hours)}:${this.padTo2Digits(minutes)}:${this.padTo2Digits(
    seconds,
  )}`; */

  // tari9ti
   return `${this.padTo2Digits(hours) + ' Hr'} ${this.padTo2Digits(minutes) + ' Min'}`;
}


  calculateDiff(data1: Date, data2: Date) {
    let date = new Date(data1);
    let datefou9 = new Date(data2);
    //let currentDate = new Date();
    console.log('data',date)
    console.log('data2', datefou9)
   // let days = Math.floor((datefou9.getTime() - date.getTime()) / 1000 / 60 / 60 / 24);
    let days = Math.floor((Date.UTC(datefou9.getFullYear(), datefou9.getMonth(), datefou9.getDate()) - Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())) / (1000 * 60 * 60 * 24)); 
   return days;
  }

      sortby(){
        if (this.test==null){return this.vols;}else{

        
        return this.vols.filter(vols => vols.airline.idairline == this.test);
      }}

  checkCheckBoxvalue(id:number) {
    console.log("id: " + id);
      this.test=id;
    
   // this.oc=this.vols.filter(vols => vols.airline.idairline === id);
  }

    
      

     
   
  



}
