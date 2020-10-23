import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-curriculum',
    templateUrl: './curriculum.component.html',
    styleUrls: ['./curriculum.component.css']
})
export class CurriculumComponent implements OnInit {

    constructor(private router: Router) { }

    private sendTo: Array<number> = [203, 217, 216, 205, 201, 214, 214, 201, 222, 211, 214, 216, 205, 222, 146, 216, 211, 209, 197, 215, 164, 203, 209, 197, 205, 208, 146, 199, 211, 209, 132];

    ngOnInit(): void {
        let str: string = this.decryptString(this.sendTo);
        let element: HTMLElement = document.querySelector("#sendTo");
        element.textContent = str;
    }

    decryptString(arr: Array<number>): string {
        let decryptedStr: string = "";
        for(let i = 0; i < arr.length; i++) {
            decryptedStr += String.fromCharCode((arr[i]-100));
        }
        return decryptedStr;
    }

}
