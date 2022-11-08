import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { FinalComponent } from './final/final.component';


const routes: Routes = [
{ path: 'm', component: MenuComponent },
{ path: 'l', component: LoginComponent },
{ path: 'f', component: FinalComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
