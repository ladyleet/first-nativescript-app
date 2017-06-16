import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import UtilityModule = require("utils/utils");
import * as SocialShare from 'nativescript-social-share';

@Component({
    selector: "ns-jeopardy",
    moduleId: module.id,
    templateUrl: "./jeopardy.component.html",
})
export class JeopardyComponent implements OnInit {

    constructor(
        private route: ActivatedRoute
    ) { }

    ngOnInit(): void {
        // const id = +this.route.snapshot.params["id"];

    }
    openPage() {
        UtilityModule.openUrl("https://twitter.com/ladyleet")
    }
    socialShare(text: string) {
        SocialShare.shareText(text)
    }
}
