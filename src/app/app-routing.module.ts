import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
 
import { ListComponent }  from './components/list/list.component';
 import { LoginComponent } from './components/login/login.component';
 
const routes: Routes = [
  { path: 'get-list',     component: ListComponent },
  { path: 'login',     component: LoginComponent },
  
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}