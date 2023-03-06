import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})

export class CarComponent implements OnInit {
  carextra!:any;
  constructor() { }

  ngOnInit(): void {
    this.carextra  = localStorage.getItem('extra-car')
    if(this.carextra === null){
      localStorage.setItem('extra-car','10')
    }
    
   
   
  }

  new(){
    this.carextra= localStorage.getItem('extra-car')
    console.log("car",this.carextra);
  }

  addextra(){
    localStorage.setItem('extra-car','1');
    this.new();
  }

  backdefault(){
    localStorage.setItem('extra-car','3');
    this.new();
  }

  /* annuleextra(){
    localStorage.setItem('extra-car','3');
    this.new();
  } */

  Removecar(){
    localStorage.setItem('extra-car','2');
    this.new();
  }

}
