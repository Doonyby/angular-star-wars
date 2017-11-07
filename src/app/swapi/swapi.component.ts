import { Component, OnInit } from '@angular/core';

import { SwapiService } from './swapi.service';

@Component({
    selector: 'swapi-data',
    templateUrl: './swapi.component.html',
    styleUrls: ['./swapi.component.css'],
    providers: [ SwapiService ],
})

export class Swapi implements OnInit {
    errorMessage: string;
    swapiData: any[] = [];

    constructor(private _swapiService: SwapiService) {

    }

    ngOnInit(): void {
        console.log('Swapi was inited.');
        this._swapiService.getSwapi()
            .subscribe(data => {
                this.swapiData = data;
                console.log(this.swapiData);
            },
                error => this.errorMessage = <any>error);
        
    }
}