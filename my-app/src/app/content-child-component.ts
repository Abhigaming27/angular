import { Component } from "@angular/core";

@Component({
    selector: 'content-child-component',
    template: `
        <section>
            <h2>This is Child heading</h2>
            <ng-content>
            </ng-content>
        </section>
    `
})

export class ContentChildComponent {
    
}