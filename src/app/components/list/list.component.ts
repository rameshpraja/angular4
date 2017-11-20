import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

import { PostService,AlertService,LoaderService }  from '../../services/index';
import {Post} from '../../model/post';


export interface UserRole {
    module_id: string,
    module_description: string,
    module_role: [
        {
            module_role: string,
            module_role_description: string,
        }
    ]
}

export interface ResponseAlert {
    id: number;
    message: string;
}
const AlertsArray: ResponseAlert[] = [
    {
        id: 400,
        message: 'Invalid Data',
    }, {
        id: 401,
        message: 'User is not valid for Request',
    }, {
        id: 403,
        message: 'Maximum Attempt Reached, please contact Gruber customer service',
    }, {
        id: 404,
        message: 'You have not found any company that matches your search.',
    }, {
        id: 500,
        message: 'Internal Server Error',
    }
];

@Component({
  selector: 'my-list',
  templateUrl:'./list.component.html'
})

export class ListComponent implements OnInit { 
	name = 'Angular';
	title:string = "";
	roles: UserRole[];
	posts : Post[];
	alerts = AlertsArray;
	private errorMessage:any = '';
	
	constructor(
		private _PostService: PostService,
		private location: Location,
		private alertService: AlertService,
    ) {
	}
	
	
	
	ngOnInit(): void {
	   this._PostService.getData()
	     .subscribe(
          	posts => {
				  this.posts = posts
			},
          	error => {
				this.alertService.error(error, (this.alerts.filter(x => x.id === error.status))[0].message);
			});
	 }
	 
	 goBack(): void {
	  this.location.back();
	}
}

