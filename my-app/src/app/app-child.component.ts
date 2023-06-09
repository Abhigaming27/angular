import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-child-component',
    templateUrl: './app-child.component.html',
    styles: ['h3 {color: red}']
})

export class ChildComponent {
    @Input() public name = ''
    @Output() buttonClicked: EventEmitter<Event> = new EventEmitter()
    constructor() {}
}