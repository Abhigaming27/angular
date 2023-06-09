import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
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
import { TodayComponent } from './today.component';
import { ExponentialStrength } from './exponential.pipe';
import { HighlightDirective } from './highlight.directive';
 
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
    AdDirective,
    TodayComponent,
    ExponentialStrength,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [AdService],
  bootstrap: [AppComponent]
})
export class AppModule { }