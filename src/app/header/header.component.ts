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
    private isOpenHamburger: boolean = false;

    private currentScrollFunction;

    constructor(private router: Router, public emitter: EmitterService) {
        this.scrollToBioEmitter = emitter.getEmitter();
    }


    ngOnInit(): void {
        let headerContainer: HTMLElement = document.querySelector("#header-container");

        this.router.events.subscribe(e => {
            if (e instanceof NavigationEnd && e.urlAfterRedirects === "/home") { // only interested in this type of event
            
                if (window.innerWidth <= 770) {
                    headerContainer.classList.add("show");
                } else {
                    window.onscroll = this.showHeaderOnScroll;
                }
                // enable fancy header

            } else {
                window.onscroll = undefined;
                headerContainer.classList.add("show");
            }

        });


    }

    showHeaderOnScroll() {
        let headerContainer: HTMLElement = document.querySelector("#header-container");
        if (window.scrollY > 110) {
            headerContainer.classList.add("show");
        } else {
            headerContainer.classList.remove("show");
        }
    }

    toggleHamburger(): void {
        let hamburgerMenu: HTMLElement = document.querySelector("#mobile-burger-button");
        let mobileMenu: HTMLElement = document.querySelector("#mobile-nav-container");
        let mobileMenuContent: HTMLElement = document.querySelector("#mobile-nav");


        if (!this.isOpenHamburger) {
            hamburgerMenu.classList.add("open");
            mobileMenu.classList.add("open");
            setTimeout(() => { mobileMenuContent.classList.add("rise"); }, 100);
            // disable scrolling when menu is active
            this.disableScrolling();
            this.isOpenHamburger = true;
        } else {
            setTimeout(() => {
                hamburgerMenu.classList.remove("open");
                mobileMenu.classList.remove("open");
            }, 300);
            mobileMenuContent.classList.remove("rise");

            // enable scrolling again once closed
            this.enableScrolling();
            this.isOpenHamburger = false;
        }

    }

    disableScrolling() {
        let scrollTop: number = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft: number = window.pageXOffset || document.documentElement.scrollLeft;
        this.currentScrollFunction = window.onscroll;
        window.onscroll = ()=>{
            window.scrollTo(scrollLeft, scrollTop);
        }
    }

    enableScrolling() {
        window.onscroll = this.currentScrollFunction;
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
        //console.log("navigating home");
        this.router.navigate(["home"]);
        this.scrollToBioEmitter.next(1);
    }

    gotoSection(section: string): void {
        this.router.navigate([section]);
        if (section === "home") { this.scrollToBioEmitter.next(1); }
        this.toggleHamburger();
    }
}
