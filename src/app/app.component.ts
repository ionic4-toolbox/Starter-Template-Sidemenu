import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
      { title: 'Home',    url: '/home', icon: 'home' },
      { title: 'List',    url: '/list',   icon: 'list'},

      { title: 'Action Sheet', url: '/actionSheet', icon: 'home' },
      { title: 'Alert', url: '/alert', icon: 'home' },
      { title: 'Loading', url: '/loading', icon: 'home' },
      { title: 'Modal', url: '/modal', icon: 'home' },
      { title: 'Popover', url: '/popover', icon: 'home' },
      { title: 'Toast', url: '/toast', icon: 'home' },
      { title: 'Basic Inputs', url: '/basic-inputs', icon: 'home' },
      { title: 'Group Inputs', url: '/group-inputs', icon: 'home' },
      { title: 'Form Sample', url: '/form-sample', icon: 'home' },
      { title: 'Segments', url: '/segment', icon: 'home' },

      { title: 'No Routing', url: '/no-routing-nav', icon: 'home' },
      { title: 'Simple Nav', url: '/simple-nav/page-one', icon: 'home' },

      { title: 'Lazy Loaded Tabs',          url: '/lazy-load-tabs',                                 icon: 'list' }, 
      { title: 'Lazy Load Tab: Mustang',    url: '/lazy-load-tabs', outlets: { tab1: ['mustang'] }, icon: 'list' },
      { title: 'Lazy Load Tab: Camaro',     url: '/lazy-load-tabs', outlets: { tab1: ['camaro'] },  icon: 'list' },
      { title: 'Lazy Load Tab: Charger',    url: '/lazy-load-tabs', outlets: { tab1: ['charger'] }, icon: 'list' },

      { title: 'Simple Tabs',               url: '/simple-tabs',                                    icon: 'list' },
      { title: 'Simple Tab: Mustang',       url: '/simple-tabs', outlets: { tab1: ['mustang'] },    icon: 'list' },
      { title: 'Simple Tab: Camaro',        url: '/simple-tabs', outlets: { tab1: ['camaro'] },     icon: 'list' },
      { title: 'Simple Tab: Charger',       url: '/simple-tabs', outlets: { tab1: ['charger'] },    icon: 'list' },

      { title: 'Static Tabs', url: 'static-tabs', icon: 'home' },

      { title: 'Badge', url: '/badge', icon: 'home' },
      { title: 'Button', url: '/button', icon: 'home' },
      { title: 'Card ', url: '/card', icon: 'home' },
      { title: 'Content', url: '/content', icon: 'home' },
      { title: 'ngIf', url: '/ng-if', icon: 'home' },
      { title: 'Show/Hide When', url: '/show-hide-when', icon: 'home' },
      { title: 'Virtual Scroll', url: '/virtual-scroll', icon: 'home' },

    ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
 