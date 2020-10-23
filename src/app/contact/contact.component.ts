import { Component, OnInit } from '@angular/core';
import * as smtpjs from "../../assets/js/smtp";
@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {

    }

    private sendTo: Array<number> = [203, 217, 216, 205, 201, 214, 214, 201, 222, 211, 214, 216, 205, 222, 146, 216, 211, 209, 197, 215, 164, 203, 209, 197, 205, 208, 146, 199, 211, 209, 132];


    markInvalidFields(): void {
        let name: HTMLInputElement = document.querySelector("#fname");
        let fName: HTMLInputElement = document.querySelector("#ffamilyname");
        let email: HTMLInputElement = document.querySelector("#femail");
        let message: HTMLTextAreaElement = document.querySelector("#message");

        // to highlight wrong fields
        let nameLabel: HTMLInputElement = document.querySelector("#fname-label");
        let fNameLabel: HTMLInputElement = document.querySelector("#ffamilyname-label");
        let emailLabel: HTMLInputElement = document.querySelector("#femail-label");
        let messageLabel: HTMLTextAreaElement = document.querySelector("#message-label");


        if (!name.validity.valid) {
            nameLabel.classList.add("incorrect-info");
            nameLabel.classList.remove("correct-info");


        } else {
            nameLabel.classList.add("correct-info");
            nameLabel.classList.remove("incorrect-info");


        }
        if (!fName.validity.valid) {
            fNameLabel.classList.add("incorrect-info");
            fNameLabel.classList.remove("correct-info");

        } else {
            fNameLabel.classList.add("correct-info");
            fNameLabel.classList.remove("incorrect-info");

        }
        if (!email.validity.valid) {
            emailLabel.classList.add("incorrect-info");
            emailLabel.classList.remove("correct-info");
        } else {
            emailLabel.classList.add("correct-info");
            emailLabel.classList.remove("incorrect-info");

        }
        if (!message.validity.valid) {
            messageLabel.classList.add("incorrect-info");
            messageLabel.classList.remove("correct-info");
        } else {
            messageLabel.classList.add("correct-info");
            messageLabel.classList.remove("incorrect-info");

        }

    }

    onClickForm() {
        let name: HTMLInputElement = document.querySelector("#fname");
        let fName: HTMLInputElement = document.querySelector("#ffamilyname");
        let email: HTMLInputElement = document.querySelector("#femail");
        let message: HTMLTextAreaElement = document.querySelector("#message");

        this.markInvalidFields();

        let isValid: boolean = name.validity.valid
            && fName.validity.valid
            && email.validity.valid
            && message.validity.valid;

        /*
    console.log("Data: ", name.value, ", ",
        fName.value, ", ",
        email.value, ", ",
        message.value, ", ",
        "isValid, ", isValid);
        */

        if (isValid) {
            let str: string = this.decryptString(this.sendTo);
            //console.log(str);
            smtpjs.Email.send({
                SecureToken: "494a24f3-dee1-4a24-8b5d-ff7c2c70d9e8",
                To: str,
                From: email.value,
                Subject: "Mensaje de tometomi.com: " + name.value + " " + fName.value,
                Body: message.value
            }).then(
                msg => {
                    //alert(msg);
                    let confirmationText: HTMLElement = document.querySelector("#confirm-send");
                    confirmationText.style.display = "block";
                    if (msg === "OK") {
                        confirmationText.style.color = "#56765A";
                        confirmationText.textContent = "El mensaje se ha enviado correctamente";
                        name.value = "";
                        fName.value = "";
                        email.value = "";
                        message.value = "";
                    } else {
                        confirmationText.style.color = "#C33149";
                        confirmationText.textContent = "El mensaje no ha podido enviarse correctamente";
                    }
                }
            );

        } else {
            let nameLabel: HTMLInputElement = document.querySelector("#fname-label");
            let fNameLabel: HTMLInputElement = document.querySelector("#ffamilyname-label");
            let emailLabel: HTMLInputElement = document.querySelector("#femail-label");
            let messageLabel: HTMLTextAreaElement = document.querySelector("#message-label");
            nameLabel.classList.add("incorrect-info");
            fNameLabel.classList.add("incorrect-info");
            emailLabel.classList.add("incorrect-info");
            messageLabel.classList.add("incorrect-info");

        }
    }

    decryptString(arr: Array<number>): string {
        let decryptedStr: string = "";
        for (let i = 0; i < arr.length; i++) {
            decryptedStr += String.fromCharCode((arr[i] - 100));
        }
        return decryptedStr;
    }

    encryptString(s: string): Array<Number> {
        let encryptedArr: Number[] = [];
        let str: string = "";
        for (let i = 0; i < s.length; i++) {
            let num = s.charCodeAt(i) + 100;
            encryptedArr.push(num);
            str += num + ", ";
        }
        return encryptedArr;
    }
}
