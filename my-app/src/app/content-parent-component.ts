import { Component } from "@angular/core";

@Component({
    selector: 'content-parent-component',
    template: `
        <content-child-component>
            This content come from Parent component
        </content-child-component>
    `
})

export class ContentParentComponent {

}