import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { EmitterService } from '../emitter.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    private scrollToBioEmitter: BehaviorSubject<number>;

    constructor(private router: Router, public emitter: EmitterService) {
        this.scrollToBioEmitter = emitter.getEmitter();
    }


    ngOnInit(): void {
        let headerContainer: HTMLElement = document.querySelector("#header-container");

        this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd) { // only interested in this type of event

                if (e.urlAfterRedirects === "/home") {

                    // enable fancy header
                    window.onscroll = function () {
                        if (window.scrollY > 110) {
                            headerContainer.classList.add("show");
                        } else {
                            headerContainer.classList.remove("show");
                        }
                    }
                } else {
                    window.onscroll = undefined;
                    headerContainer.classList.add("show");
                }
            }

        });


    }

    enableUnderline(target: HTMLElement) {
        target.querySelector(".nav-underline").classList.add("show");
        //console.log("Hovered in", target);
    }
    disableUnderline(target: HTMLElement) {
        target.querySelector(".nav-underline").classList.remove("show");
        //console.log("Hovered out", target);
    }

    scrollToBio(): void {
        //console.log("scrolling to bio");
        console.log("navigating home");
        this.router.navigate(["home"]);
        this.scrollToBioEmitter.next(1);
    }
}
