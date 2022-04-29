import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'convert',
})
export class ConvertPipe implements PipeTransform {
    transform(value: any, targetUnits: any): any {
        if (!value) {
            return '';
        }

        switch (targetUnits) {
            case 'Km':
                return value * 1.60934;
            case 'm':
                return value * 1.60934 * 1000;
            case 'm':
                return value * 1.60934 * 1000 * 1000;
            default:
                throw new Error('Target units not supported');
        }
    }
}
