import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs-lazy-load',
  templateUrl: 'tabs.component.html'
})
export class TabsComponent {
    constructor() {
        console.log('LazyLoad:Tabs:Component:constructor');
    }
}
