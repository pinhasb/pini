import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { model } from 'src/app/Models/model';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() car!:model;
  @Output() out = new EventEmitter<model>();
  model!:model
  constructor(private rout:Router) { }

  ngOnInit(): void {
  }
  addNewCar(value: string) {
    this.model= {'id':1,'name':value}
    this.out.emit(this.model);
  }
  nevigate():void{
     this.rout.navigate(['carShow',this.car.id]);
    
  
  }

}
