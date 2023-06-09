import { Component} from '@angular/core';

@Component({
    selector: 'today',
    template: `
        <h2>Today's date is:</h2>
        <p>{{today | date}}</p>

        <h2>ExponentialStrength is:</h2>
        <p>{{firstNum | exponentialStrength: secondNum}}</p>
    `
})

export class TodayComponent {
    today = new Date()
    firstNum = 10
    secondNum = 2
}