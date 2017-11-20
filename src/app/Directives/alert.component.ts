import { Input, Component, OnInit } from '@angular/core';
import { AlertService } from '../Services/index';

@Component({
    moduleId: module.id,
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit {
    @Input()
    message: any;
   
    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => { this.message = message; });
    }

    public closeAlert(alert: any) {
        this.message = '';
    }
}