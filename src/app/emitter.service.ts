import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class EmitterService {

    constructor() { }

    private gotoBio: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    getEmitter(){
        return this.gotoBio;
    }
}
