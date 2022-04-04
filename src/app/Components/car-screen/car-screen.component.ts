import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { model } from 'src/app/Models/model';
import { ProjectService } from 'src/app/Services/project.service';

@Component({
  selector: 'app-car-screen',
  templateUrl: './car-screen.component.html',
  styleUrls: ['./car-screen.component.css']
})
export class CarScreenComponent implements OnInit {
  car!:model
  constructor(private rout:ActivatedRoute, private service:ProjectService) { }

  ngOnInit(): void {
    const x = this.rout.snapshot.params['id'];  
    this.car = this.service.getCar(x);
    console.log(this.car)
  }
}
