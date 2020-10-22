import { Component, Input, OnInit } from '@angular/core';
import { Painting } from "../../app/painting";

@Component({
    selector: 'app-painting',
    templateUrl: './painting.component.html',
    styleUrls: ['./painting.component.css']
})
export class PaintingComponent implements OnInit {

    @Input() paintingAttr: Painting;
    @Input() givenWidth: number;
    public stylingObj;
    public title: string;

    constructor() { }

    ngOnInit(): void {
        // demo data
        //this.givenWidth = 360;
        /*this.paintingAttr = {
            picUrl: "../../assets/images/teatro_cervantes.jpg",
            picWidth: 1080,
            picHeight: 673,
            title: "Teatro Cervantes",
        };
        */
        

        this.title = this.paintingAttr.title;
        /*
        this.stylingObj = {
            "background": "var(--jet) url(" + this.paintingAttr.picUrl + ") no-repeat scroll center",
            "-webkit-background-size": "cover",
            "-moz-background-size": "cover",
            "-o-background-size": "cover",
            "background-size": "cover",
            "width": this.givenWidth + "px",
            "height": (this.paintingAttr.picHeight * this.givenWidth / this.paintingAttr.picWidth) + "px"
        };
        */
    }
    /*
    setGivenWidth(num: number, type: string): void {
        if (type === "px"){
            this.givenWidth = num;
        } else if(type === "vw") {
            let viewportWidth = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
            this.givenWidth = (num / 100) * viewportWidth;
        }      

        let painting: HTMLElement = document.querySelector("#painting-picture");
        painting.style.width = this.givenWidth + "px";
        painting.style.height = (this.paintingAttr.picHeight * this.givenWidth / this.paintingAttr.picWidth) + "px";

    }
    */

}
