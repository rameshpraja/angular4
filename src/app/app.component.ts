import { Component, OnInit } from '@angular/core';
import { LoaderService } from './services/loader.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./app.component.scss']
})
export class AppComponent implements OnInit{ 
	title = 'Welcome to Angular 4';
	showLoader: boolean;
	constructor(
	private loaderService: LoaderService
	){}
	
	ngOnInit() {
        this.loaderService.status.subscribe((val: boolean) => {
            this.showLoader = val;
        });
    }
}