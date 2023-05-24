import { Component } from "@angular/core";

@Component({
    selector: 'app-overview',
    template: `
        <h1>This is App Overview Component</h1>
        <p>This is sample text for app overview component</p>
    `,
    styles: [
        `
        h1, p {
            font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        }
    `
    ]
})

export class AppOverviewComponent {

}