import { Component, Input } from '@angular/core';

@Component({
  selector: 'nav-root',
  template: `
    <h2>{{section_title}}</h2>
    <nav>
        <ul>
            <li *ngFor="let menu of menus">{{menu}}</li>
        </ul>
    </nav>
  `,
  styles: [''],
})
export class NavComponent {
    @Input() section_title:String = ''
    @Input() menus:String [] = []
}