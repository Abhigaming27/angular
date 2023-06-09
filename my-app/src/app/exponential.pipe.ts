import { Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'exponentialStrength'})

export class ExponentialStrength implements PipeTransform {
    transform(value: number, exponent = 1) {
        return Math.pow(value, exponent)
    }
}