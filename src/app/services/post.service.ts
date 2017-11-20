import {Injectable} from "@angular/core";
import { Http, Headers, Response, Jsonp, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {Post} from '../model/post';
import {Global} from '../Shared/global';

@Injectable()
export class PostService {
	headers: Headers;
    options: RequestOptions;
    
    constructor(
    	private http:Http
    ) {
    	this.headers = new Headers({
            'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Orgin': '*'
        });
        this.options = new RequestOptions({ headers: this.headers });
    }
	
    getData():Observable<Post[]> {
    	let Useroptions = this.getHeaderParams();
        return this.http.get(Global.BASE_GET_USERS,Useroptions)
        .map((res:Response) => {
        	let results = res.json()
        	//console.log("Result " + JSON.stringify(results));
        	return results;
        });
        //.catch(this.handleError);
    }

    // private handleError(error:any) {
    //     // In a real world app, we might use a remote logging infrastructure
    //     // We'd also dig deeper into the error to get a better message
    //     let errMsg = (error.message) ? error.message :
    //         error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    //     console.error(errMsg); // log to console instead
    //     return Observable.throw(errMsg);
    // }
    
    
    //Start - Get Header Data
    getHeaderParams() {
        let Userheaders: Headers;
        let Useroptions: RequestOptions;
        Userheaders = new Headers({
            'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Orgin': '*'
        });
        Useroptions = new RequestOptions({ headers: Userheaders });
        return Useroptions;
    }
    //End - Get Header Data
}