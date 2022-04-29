import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    RecieverName: string = '';
    paymentDate: string = '';
    amount = 0;
    miles: number = 0;

    onMileChange(value: any) {
        this.miles = parseFloat(value);
    }

    recieverInput(eventNames: any) {
        let name = eventNames.target.value;
        this.RecieverName = name;
    }

    paymentInput(eventNames: any) {
        let name = eventNames.target.value;
        this.paymentDate = name;
    }

    amountInput(eventNames: any) {
        let name = eventNames.target.value;
        this.amount = name;
    }
}
