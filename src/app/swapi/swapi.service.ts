import { Injectable } from "@angular/core";


@Injectable()
export class SwapiService {
    getSwapi(): any[] {
        return [
            {
                'number': 4,
                'title': 'A new hope'
            },
            {
                'number': 5,
                'title': 'Empire strikes back'
            },
            {
                'number': 6,
                'title': 'Return of the jedi'
            }
        ];
    }
}