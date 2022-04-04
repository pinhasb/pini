import { Component, OnInit } from '@angular/core';
import { model } from 'src/app/Models/model';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  cars:model[]=[];
  constructor(private servis:ProjectService) { }

  ngOnInit(): void {
    this.cars=this.servis.getCars();
  }
  public addCar(car:model):void{
    this.cars.push(car);
  }
}
