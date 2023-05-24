import { Component } from "@angular/core";

@Component({
    selector: 'app-parent-component',
    templateUrl: './app-parent.component.html'
})

export class ParentComponent {
    constructor() {}

    handleButtonClicked(event: { stopPropagation: () => void; }) {
        event.stopPropagation()
        alert('Button clicked')
    }
    
}