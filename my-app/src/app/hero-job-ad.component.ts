import { Component, Input } from "@angular/core";

import { AdComponent } from "./ad.component";

@Component({
    template: `
        <section class="job-ad">
            <h4>{{data.headline}}</h4>
            {{data.body}}
        </section>
    `
})

export class HeroJobAdComponent implements AdComponent {
    @Input() data: any;
}