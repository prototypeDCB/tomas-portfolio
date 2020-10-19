import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { Painting } from '../painting';
import {EmitterService} from "../emitter.service";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    private scrollToBioEmitter: BehaviorSubject<number>;
    private subscription: Subscription;
    private currImgId = 0;
    public slideshow: HTMLElement = document.querySelector("#slideshow");   // this is null fkin dumbass
    
    constructor(public emitter: EmitterService) { 
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
            left: image.offsetLeft - (image.offsetWidth / 2),
            behavior: 'smooth'
        });

        // Set shadow on initial round button
        document.querySelector("#first-round-button").classList.add("active-round-button");

        this.subscription = this.scrollToBioEmitter.subscribe({
            next: (num: number)=>{
                if(num == 1){
                    let bio: HTMLElement = document.querySelector("#bio-container");
                    let scrollOffset = bio.offsetTop - 70;
                    console.log("scrolling to bio - home");
                    window.scroll({
                        top: scrollOffset,
                        behavior: "smooth"
                    });
                }
                
            }
        });


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
        let image: HTMLElement = document.querySelector("#img" + imgId);
        let slideshow: HTMLElement = document.querySelector("#slideshow");
        slideshow.scroll({top: 0, left: image.offsetLeft - (image.offsetWidth / 2), behavior: 'smooth'});
        this.currImgId = imgId;

        // Update button shadow
        let buttons: NodeList = document.querySelectorAll(".round-button");
        // Remove previous shadow
        for(let i = 0; i < buttons.length; i++) {
            let currButton: HTMLElement = buttons[i] as HTMLElement;
            currButton.classList.remove("active-round-button");
        }
        // Add updated shadow
        button.classList.add("active-round-button");

    }

    limitScroll(): void {
        // first image it's possible to scroll to
        let firstImage: HTMLElement = document.querySelector("#img0");
        // last image it's possible to scroll to
        let lastImage: HTMLElement = document.querySelector("#img4");
        let slideshow: HTMLElement = document.querySelector("#slideshow");

        if (slideshow.scrollLeft > lastImage.offsetLeft - (lastImage.offsetWidth / 2)) {
            //console.log("reached limit");
            slideshow.scroll({
                top: 0,
                left: lastImage.offsetLeft - (lastImage.offsetWidth / 2),
                behavior: "auto"
            });
        }

        if (slideshow.scrollLeft < firstImage.offsetLeft - (firstImage.offsetWidth / 2)) {
            slideshow.scroll({
                top: 0,
                left: firstImage.offsetLeft - (firstImage.offsetWidth / 2),
                behavior: "auto"
            });
        }

    }

    showCover(target: HTMLElement): void {
        let cover: HTMLElement = target.querySelector(".image-cover");
        cover.classList.add("show");
        console.log("Entering", cover);

    }

    hideCover(target: HTMLElement): void {
        let cover: HTMLElement = target.querySelector(".image-cover");
        cover.classList.remove("show");
        console.log("Leaving", cover);
    }

    scrollToBio(): void {
        let bio: HTMLElement = document.querySelector("#bio-container");
        let bioOffset = bio.offsetTop - 70;
        window.scroll({top: bioOffset, behavior: "smooth"});
        console.log("header");
        //bio.scrollIntoView({behavior: "smooth"});
    }
}
