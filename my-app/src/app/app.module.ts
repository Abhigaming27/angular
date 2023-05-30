import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { AppOverviewComponent } from './app-overview.component';
import { ChildComponent } from './app-child.component';
import { ParentComponent } from './app-parent.component';
import { HeroChildComponent } from './hero-child.component';
import { HeroParentComponent } from './hero-parent.component';
import { NavComponent } from './nav.component'
import { ContentChildComponent } from './content-child-component';
import { ContentParentComponent } from './content-parent-component';
import { HeroJobAdComponent } from './hero-job-ad.component';
import { AdBannerComponent } from './ad-banner.component';
import { HeroProfileComponent } from './hero-profile.component';
import { AdDirective } from './ad.directive';
import { AdService } from './ad.service';

 
@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    AppOverviewComponent,
    ChildComponent,
    ParentComponent,
    HeroChildComponent,
    HeroParentComponent,
    NavComponent,
    ContentChildComponent,
    ContentParentComponent,
    AppComponent,
    HeroJobAdComponent,
    AdBannerComponent,
    HeroProfileComponent,
    AdDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }