import {Injectable} from "@angular/core";
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {User} from '../model/user';

@Injectable()
export class LoginService {
 	headers: Headers;
    options: RequestOptions;
    
    constructor(private http:Http) {
      this.headers = new Headers({ 
	  'Content-Type': 'application/json', 'Accept': 'application/json', 'Access-Control-Allow-Orgin': '*'
	  });
        this.options = new RequestOptions({ headers: this.headers });
    }
	
	private url:string = "http://jsonplaceholder.typicode.com/posts/";
	//private loginUrl:string = "https://reqres.in/api/login";
	private loginUrl:string = "https://gruberapidev.azurewebsites.net/user_authentication";
	
    getData():Observable<User[]> {
        return this.http.get(this.url)
        .map((res:Response) =>res.json())
        .catch(this.handleError);
    }
	
	
	
    login(username: string, password: string):Observable<User[]>{
     let body = JSON.stringify({ email: username, password: password, "provider": "internal"});
        console.log("Body => : "+ body );
        return this.http.post(this.loginUrl, body, this.options)
         .map((response: Response) => {
                let user = response.json();
                localStorage.setItem('verificationEmail', user.email);
                console.log("User=> : " + user.email);
                return user.email;
            });
    }

    
     private extractData(res: Response) {
        let body = res.json();
        console.log(body);
        return body || {};
    }
	
    private handleError(error:any) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        let errMsg = (error.message) ? error.message :
            error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg); // log to console instead
        return Observable.throw(errMsg);
    }
}