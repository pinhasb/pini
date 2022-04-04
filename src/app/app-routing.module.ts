import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Services/auth.guard';
import { CarScreenComponent } from './Components/car-screen/car-screen.component';
import { ChildComponent } from './Components/child/child.component';
import { ParentComponent } from './Components/parent/parent.component';
import { AuthService } from './Services/auth.service';

const routes: Routes = [
  {path: 'parent',component:ParentComponent},
  {path: 'chaild',component:ChildComponent},
  {path: '',pathMatch:'full', redirectTo:'parent'},
  {path:'carShow/:id',component:CarScreenComponent,  canActivate: [AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService]
})
export class AppRoutingModule { }
