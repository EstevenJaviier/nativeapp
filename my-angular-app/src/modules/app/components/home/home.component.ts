import { Component, OnInit } from "@angular/core";
import * as TNSPhone from 'nativescript-phone';

@Component({
    selector: "ns-items",
    templateUrl: "./home.component.html",
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
    constructor() {
        this.callHome();
        this.messageParents();
     }

    ngOnInit(): void {

    }

    /// Dial a phone number.
    public callHome() {
    const phoneNumber = '3205157279';
    TNSPhone.requestCallPermission('You should accept the permission to be able to make a direct phone call.')
        .then(() => TNSPhone.dial(phoneNumber, false))
        .catch(() => TNSPhone.dial(phoneNumber, true));
    }

    // Text a number (or multiple numbers)
    public messageParents() {
        TNSPhone.sms(['3205157279'], "Text till your fingers bleed")
            .then((args) => {
                console.log(JSON.stringify(args));
            }, (err) => {
                console.log('Error: ' + err);
            })
    }

}
