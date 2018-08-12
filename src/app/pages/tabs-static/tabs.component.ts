import { Component } from "@angular/core";

@Component({
    selector: "app-page-tabs-static",
    templateUrl: "./tabs.page.html",
    styleUrls: ["./tabs.page.scss"]
})
export class TabsPageComponent {
    constructor() {
        console.log("TabsStaticPageComponent:constructor");
    }
}
