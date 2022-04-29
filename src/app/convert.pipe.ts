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
            case 'km':
                return `${value * 1.60934} km`;
            case 'm':
                return `${value * 1.60934 * 1000} m`;
            case 'cm':
                return `${value * 1.60934 * 1000 * 1000} cm`;
            default:
                throw new Error('Target units not supported');
        }
    }
}
