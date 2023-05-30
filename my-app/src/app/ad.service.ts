import { Injectable } from "@angular/core";

import { HeroJobAdComponent } from "./hero-job-ad.component";
import { HeroProfileComponent } from "./hero-profile.component";
import { AdItem } from "./adItem";

@Injectable()
export class AdService {
    getAds() {
        return [
            new AdItem(
                HeroProfileComponent,
                {name: 'Suresh', bio: 'This is Java Developer'}
            ),
            new AdItem(
                HeroProfileComponent,
                {name: 'Harish', bio: 'This is Frontend Developer'}
            ),
            new AdItem(
                HeroJobAdComponent,
                {headline: 'Prathamesh', body: 'This is UI/UX Developer'}
            ),
            new AdItem(
                HeroProfileComponent,
                {name: 'Manish', bio: 'This is Fullstack Developer'}
            ),
            new AdItem(
                HeroJobAdComponent,
                {headline: 'Welcome to our website', body: 'This is new Hero job ad component'}
            )
        ]
    }
}