import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home",           loadChildren: "./pages/home/home.module#HomePageModule" },
  { path: "list",           loadChildren: "./pages/list/list.module#ListPageModule" },
  { path: "basic-inputs",   loadChildren: "./pages/basic-inputs-page/basic-inputs-page.module#BasicInputsPageModule" },
  { path: "show-hide-when", loadChildren: "./pages/show-hide-when/show-hide-when.module#ShowHideWhenModule" },
  { path: "form-sample",    loadChildren: "./pages/form-sample-page/form-sample-page.module#FormSamplePageModule" },
  { path: "group-inputs",   loadChildren: "./pages/group-inputs-page/group-inputs-page.module#GroupInputsPageModule" },

  { path: "alert",          loadChildren: "./pages/alert/alert.module#AlertModule" },
  { path: "toast",          loadChildren: "./pages/toast/toast.module#ToastModule" },

  { path: "actionSheet",    loadChildren: "./pages/action-sheet/action-sheet.module#ActionSheetModule" },
  { path: "badge",          loadChildren: "./pages/badge/badge.module#BadgeModule" },
  { path: "button",         loadChildren: "./pages/button/button.module#ButtonModule" },
  { path: "card",           loadChildren: "./pages/card/card.module#CardModule" },
  { path: "content",        loadChildren: "./pages/content/content.module#ContentModule" },
  { path: "loading",        loadChildren: "./pages/loading/loading.module#LoadingModule" },
  { path: "modal",          loadChildren: "./pages/modal/modal.module#ModalModule" },
  { path: "ng-if",          loadChildren: "./pages/ng-if/ng-if.module#NgIfModule" },
  { path: "popover",        loadChildren: "./pages/popover/popover.module#PopoverModule" },
  { path: "segment",        loadChildren: "./pages/segment/segment.module#SegmentModule" },
  { path: "virtual-scroll", loadChildren: "./pages/virtual-scroll/virtual-scroll.module#VirtualScrollModule" },
  { path: "no-routing-nav", loadChildren: "./pages/no-routing-nav/no-routing-nav.module#NoRoutingNavModule"   },
  { path: "simple-nav",     loadChildren: "./pages/simple-nav/simple-nav.module#SimpleNavModule"  },
  
  { path: "lazy-load-tabs", loadChildren: "./pages/tabs-lazy-load/tabs.module#TabsModule"  },
  { path: "simple-tabs",    loadChildren: "./pages/tabs-simple/tabs.module#TabsModule" },
  { path: "static-tabs",    loadChildren: "./pages/tabs-static/tabs.module#TabsModule" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
