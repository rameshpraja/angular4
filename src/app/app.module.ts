import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'; // NgModel lives here
import { HttpModule }    from '@angular/http';
import { RouterModule }   from '@angular/router';
import {StarRatingModule} from 'angular-star-rating';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }  from './app.component';

import { PostService }  from './services/post.service';
import { ListComponent } from './components/list/list.component';
import { LoginComponent } from './components/login/login.component';
import { LoginService }  from './services/login.service';
import { LoaderService } from './services/loader.service';
import { AlertService } from './services/alert.service';
@NgModule({
  	imports:[ 
		BrowserModule, 
		FormsModule, 
		HttpModule,
		AppRoutingModule,
		StarRatingModule.forRoot()
	],
  	declarations:[
  	 	AppComponent,
  	 	ListComponent,
  	 	LoginComponent
  	 ],
  	 providers: [
  		PostService,
  		LoginService,
		LoaderService,
		AlertService,
  	],
  	bootstrap:[
  	 	AppComponent 
  	]
})
export class AppModule { }
