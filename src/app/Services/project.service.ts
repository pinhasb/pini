import { Injectable } from '@angular/core';
import { model } from '../Models/model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() { }
  private car: model = new model; 

  private cars: model[] = [
    {
      'id': 1,
      'name': 'mazda'
    },
    {
      'id': 2,
      'name': 'Toyota'
    },
    {
      'id': 3,
      'name': 'Volvo'
    },
    {
      'id': 4,
      'name': 'Kia'
    }
  ];
  public get model(): model[] {
    return this.cars;
  }
  public set model(value: model[]) {
    this.cars = value;
  }
  private storage:string[]=[];

  public getCars():model[]{
   return this.model;
  }
  public getCar(id:number):model{
    const m = this.getCars().find(x => x.id == id);
    if(m){
      this.car = m;
    }    
      return this.car;    
  }
  public pushStorage():void{
    localStorage.setItem('data', JSON.stringify(this.model));
  }
  public getStorage():string[]{
   const storageGet=localStorage.getItem('data');
   if(storageGet){
     this.storage=JSON.parse(storageGet);
    }
     return this.storage;
  }
}
