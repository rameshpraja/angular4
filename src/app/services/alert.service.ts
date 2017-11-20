import { Injectable } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { AlertComponent } from '../Directives/alert.component';
//import { ResponseType } from '../Shared/enum';




@Injectable()
export class AlertService {
    private subject = new Subject<any>();
    private keepAfterNavigationChange = false;
    private staticAlertClosed = false;
    //alerts = AlertsArray;
    //private RT: ResponseType;
    constructor(private router: Router) {
        // clear alert message on route change
        router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if (this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    this.keepAfterNavigationChange = false;
                } else {
                    // clear alert
                    this.subject.next();
                }
            }
        });
    }

    success(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    }

    successPage(message: string) {
        this.subject.next({ type: 'success', text: message });
        console.log("Inside Success =>" + message);
    }


    error(errorObj: any, message: string) {
        //let errorcode: number = errorObj.status;
        //let errormsg: any = this.alerts.filter(x => x.id === errorcode);
        //errormsg[0].message = message;
        //this.keepAfterNavigationChange = keepAfterNavigationChange;

        this.subject.next({ type: 'danger', text: message });
        //this.subject.filter(x => x.text == message).debounceTime(5000).subscribe(x => x.text == null);
        //this.subject.debounceTime(5000).subscribe(() => )
        console.log("Inside Error =>" + message);
    }



    warning(message: string) {
        this.subject.next({ type: 'warning', text: message });
    }

    /*error(message: string, keepAfterNavigationChange = false) {
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message });
    }*/

    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}