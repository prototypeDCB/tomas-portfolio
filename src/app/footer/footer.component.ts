import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EmitterService } from '../emitter.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

    private scrollToBioEmitter: BehaviorSubject<number>;

    constructor(private router: Router, public emitter: EmitterService) {
        this.scrollToBioEmitter = emitter.getEmitter();
    }

    ngOnInit(): void {
    }

    scrollToBio(): void {
        //console.log("scrolling to bio");
        //console.log("navigating home");
        this.router.navigate(["home"]);
        this.scrollToBioEmitter.next(1);
    }
}
