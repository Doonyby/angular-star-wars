import { Component, OnInit } from '@angular/core';

import { SwapiService } from './swapi.service';

@Component({
    selector: 'swapi-data',
    templateUrl: './swapi.component.html',
    styleUrls: ['./swapi.component.css'],
    providers: [ SwapiService ],
})

export class Swapi implements OnInit {
    swapiData: any[] = [];
    //     {
    //         'number': 4,
    //         'title': 'a new hope'
    //     },
    //     {
    //         'number': 5,
    //         'title': 'empire strikes back'
    //     },
    //     {
    //         'number': 6,
    //         'title': 'return of the jedi'
    //     }
    // ];

    constructor(private _swapiService: SwapiService) {

    }

    ngOnInit(): void {
        console.log('Swapi was inited.');
        this.swapiData = this._swapiService.getSwapi();
    }
}