import { Component } from '@angular/core';
import { Transaction, transactions } from 'src/app/mocks/transactions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  transactions: Transaction[] = transactions;
}
