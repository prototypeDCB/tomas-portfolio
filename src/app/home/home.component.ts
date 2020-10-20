import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Painting } from '../painting';
import { EmitterService } from "../emitter.service";
import { Router } from '@angular/router';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private scrollToBioEmitter: BehaviorSubject<number>;
    private subscription: Subscription;
    private currImgId = {
        aInternal: 0,
        // if you want several listeners use an array
        aListener: function (val) { },
        set a(val) {
            this.aInternal = val;
            this.aListener(val);
        },
        get a() {
            return this.aInternal;
        },
        registerListener: function (listener) {
            this.aListener = listener;
        }
    }
    private isOpenHamburger: boolean = false;

    public slideshow: HTMLElement = document.querySelector("#slideshow");   // this is null fkin dumbass

    constructor(private router: Router, public emitter: EmitterService) {
        this.scrollToBioEmitter = emitter.getEmitter();
    }



    public paintingAttr: Painting[] = [
        { picUrl: "../../assets/images/abuelo_vino.jpg", picWidth: 1080, picHeight: 1349, title: "El bodeguero aireando el mosto" },
        { picUrl: "../../assets/images/boinas.jpg", picWidth: 1080, picHeight: 1345, title: "Boinas en la plaza de Tomelloso" },
        { picUrl: "../../assets/images/descanso.jpg", picWidth: 1080, picHeight: 1346, title: "Descanso para la comida" },
        { picUrl: "../../assets/images/familia.jpg", picWidth: 1080, picHeight: 848, title: "Familia vendimiando" },
        { picUrl: "../../assets/images/home_splash_background.jpg", picWidth: 1080, picHeight: 864, title: "Los gitanillos de Íllora se van de cuadrilla de vendimia" },
    ];



    ngOnInit(): void {

    }

    // *ngFor is ready at this point, not at ngOnInit
    ngAfterViewInit() {
        let image: HTMLElement = document.querySelector("#img0");
        document.querySelector("#slideshow").scroll({
            top: 0,
            left: image.offsetLeft + (image.offsetWidth / 2) - (document.documentElement.clientWidth / 2),
            behavior: 'smooth'
        });

        // Set shadow on initial round button
        document.querySelector("#button0").classList.add("active-round-button");

        this.subscription = this.scrollToBioEmitter.subscribe({
            next: (num: number) => {
                if (num == 1) {
                    let bio: HTMLElement = document.querySelector("#bio-container");
                    let scrollOffset = bio.offsetTop - 70;
                    //console.log("scrolling to bio - home");
                    window.scroll({
                        top: scrollOffset,
                        behavior: "smooth"
                    });
                }

            }
        });

        // register listener to update round button highlight when scrolling gallery
        this.currImgId.registerListener((value: number) => {
            // Update button shadow
            let buttons: NodeList = document.querySelectorAll(".round-button");
            // Remove previous shadow
            for (let i = 0; i < buttons.length; i++) {
                let currButton: HTMLElement = buttons[i] as HTMLElement;
                currButton.classList.remove("active-round-button");
            }
            let button = document.querySelector("#button" + value);
            // Add updated shadow
            button.classList.add("active-round-button");

        })


    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    enableUnderline(target: HTMLElement) {
        target.querySelector(".nav-underline").classList.add("show");
        //console.log("Hovered in", target);
    }
    disableUnderline(target: HTMLElement) {
        target.querySelector(".nav-underline").classList.remove("show");
        //console.log("Hovered out", target);
    }

    scrollCarousel(imgId: number, button: HTMLElement): void {
        // takes care of the scrolling part
        let image: HTMLElement = document.querySelector("#img" + imgId);
        let slideshow: HTMLElement = document.querySelector("#slideshow");
        // slideshow.scroll({ top: 0, left: image.offsetLeft - (image.offsetWidth / 2), behavior: 'smooth' });
        slideshow.scroll({ top: 0, left: (image.offsetLeft + image.offsetWidth / 2 ) - (document.documentElement.clientWidth / 2), behavior: 'smooth' });
        this.currImgId.a = imgId;

        /*
        // Update button shadow
        let buttons: NodeList = document.querySelectorAll(".round-button");
        // Remove previous shadow
        for(let i = 0; i < buttons.length; i++) {
            let currButton: HTMLElement = buttons[i] as HTMLElement;
            currButton.classList.remove("active-round-button");
        }
        // Add updated shadow
        button.classList.add("active-round-button");
        */
    }

    limitScroll(): void {
        // first image it's possible to scroll to
        let firstImage: HTMLElement = document.querySelector("#img0");
        // last image it's possible to scroll to
        let lastImage: HTMLElement = document.querySelector("#img4");
        let secondImage: HTMLElement = document.querySelector("#img1");
        let thirdImage: HTMLElement = document.querySelector("#img2");
        let fourthImage: HTMLElement = document.querySelector("#img3");
        let slideshow: HTMLElement = document.querySelector("#slideshow");

        // this is a value that will be at the middle of the screen at all times
        // think of it as a needle placed in the middle of the screen
        //let cursor: number = slideshow.scrollLeft + (window.innerWidth / 2);
        let cursor: number = slideshow.scrollLeft + (document.documentElement.clientWidth / 2);
        // the cursor must be between the minVal and maxVal at all times
        // minVal is in the middle of the first image, ditto for maxVal
        let minValue: number = firstImage.offsetLeft + (firstImage.offsetWidth / 2);
        let maxValue: number = lastImage.offsetLeft + (lastImage.offsetWidth / 2);

        if (cursor < minValue) {
            slideshow.scroll({
                top: 0,
                left: minValue - (document.documentElement.clientWidth / 2),
                behavior: "auto"
            });
        }

        if (cursor > maxValue) {
            slideshow.scroll({
                top: 0,
                left: maxValue - (document.documentElement.clientWidth / 2),
                behavior: "auto"
            });
        }

        let secondImageMiddle: number = secondImage.offsetLeft + (secondImage.offsetWidth / 2);
        let thirdImageMiddle: number = thirdImage.offsetLeft + (thirdImage.offsetWidth / 2);
        let fourthImageMiddle: number = fourthImage.offsetLeft + (fourthImage.offsetWidth / 2);


        // to keep track of the current image being displayed
        if (cursor <= minValue + 10 && cursor >= minValue - 10) {   // leave a bit of margin
            this.currImgId.a = 0;
            //console.log("new current image", this.currImgId);
        } else if (cursor <= secondImageMiddle + 10 && cursor >= secondImageMiddle - 10) {
            this.currImgId.a = 1;
            //console.log("new current image", this.currImgId);
        } else if (cursor <= thirdImageMiddle + 10 && cursor >= thirdImageMiddle - 10) {
            this.currImgId.a = 2;
            //console.log("new current image", this.currImgId);
        } else if (cursor <= fourthImageMiddle + 10 && cursor >= fourthImageMiddle - 10) {
            this.currImgId.a = 3;
            //console.log("new current image", this.currImgId);
        } else if (cursor <= maxValue + 10 && cursor >= maxValue - 10) {
            this.currImgId.a = 4;
            //console.log("new current image", this.currImgId);
        }

    }

    showCover(target: HTMLElement): void {
        let cover: HTMLElement = target.querySelector(".image-cover");
        cover.classList.add("show");
        //console.log("Entering", cover);

    }

    hideCover(target: HTMLElement): void {
        let cover: HTMLElement = target.querySelector(".image-cover");
        cover.classList.remove("show");
        //console.log("Leaving", cover);
    }

    scrollToBio(): void {
        let bio: HTMLElement = document.querySelector("#bio-container");
        let bioOffset = bio.offsetTop - 70;
        window.scroll({ top: bioOffset, behavior: "smooth" });
        //console.log("header");
        //bio.scrollIntoView({behavior: "smooth"});
    }

    toggleHamburger(): void {
        let hamburgerMenu: HTMLElement = document.querySelector("#home-mobile-burger-button");
        let mobileMenu: HTMLElement = document.querySelector("#home-mobile-nav-container");
        let mobileMenuContent: HTMLElement = document.querySelector("#home-mobile-nav");
        let homeHeader: HTMLElement = document.querySelector("#home-header-container");

        if (!this.isOpenHamburger) {
            hamburgerMenu.classList.add("open");
            mobileMenu.classList.add("open");
            homeHeader.classList.add("alternative");
            setTimeout(() => { mobileMenuContent.classList.add("rise"); }, 100);

            this.isOpenHamburger = true;
        } else {
            setTimeout(() => {
                hamburgerMenu.classList.remove("open");
                mobileMenu.classList.remove("open");
            }, 300);
            mobileMenuContent.classList.remove("rise");
            homeHeader.classList.remove("alternative");


            this.isOpenHamburger = false;
        }

    }

    gotoSection(section: string): void {
        this.router.navigate([section]);
        if (section === "home") {
            let bioContainer: HTMLElement = document.querySelector("#bio-container");
            let offset = bioContainer.offsetHeight - 70;
            window.scroll({ top: offset, behavior: "smooth" });
        }
        this.toggleHamburger();
    }


}
