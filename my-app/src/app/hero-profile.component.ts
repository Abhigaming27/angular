import { Component, Input } from "@angular/core";

import { AdComponent } from "./ad.component";

@Component({
    template: `
        <section class="hero-profile">
            <h3>Featured Hero profile</h3>
            <h4>{{data.name}}</h4>
            <p>{{data.bio}}</p>
            <strong>Hire this hero today!</strong>
        </section>
    `
})

export class HeroProfileComponent implements AdComponent {
    @Input() data: any;
}