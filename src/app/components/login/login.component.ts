import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { LoginService }  from '../../services/login.service';
import { LoaderService } from '../../services/loader.service'

import {User} from '../../model/user';

@Component({
  selector: 'my-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  	model: any = {};
	name = 'Angular Login page';
	loading = false;
	posts: User[];
	 
	constructor(private _LoginService: LoginService,
				private location: Location,
				private route: ActivatedRoute,
				private loaderService: LoaderService,
        		private router: Router,) { }

	private errorMessage:any = '';
		
	ngOnInit(): void {
	}
	
	 login() {
	  	this.loaderService.display(true);
	 	console.log(this.model);
        //this.loading = true;
        this._LoginService.login(this.model.username, this.model.password)
		.subscribe(
			data => {
			this.loaderService.display(false);
			this.router.navigate(['/']);
			console.log(JSON.stringify(data));
			},
			error => {
				//this.alertService.error(error, (this.alerts.filter(x => x.id === error.status))[0].message);
				console.log("Error pleas check !! => " + error.status);
				this.loaderService.display(false);
		});
    }
	
}

