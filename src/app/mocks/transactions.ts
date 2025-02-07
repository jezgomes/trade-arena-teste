export interface Transaction {
  date: string;
  values: string[]; // Para múltiplos valores na mesma linha
  balances: string[]; // Para múltiplos saldos na mesma linha
  additionalInfo: string[];
  types: string[];
}

export const transactions: Transaction[] = [
  {
    date: '27/07/2023, 10:53',
    values: ['+T$50 TradeCoins'],
    balances: ['T$1.257'],
    additionalInfo: ['TS Diário - 76'],
    types: ['Recompensa diária'],
  },
  {
    date: '27/07/2023, 10:53',
    values: ['-R$25 reais'],
    balances: ['R$40,00'],
    additionalInfo: ['Conta Safe 20'],
    types: ['Abertura Conta Safe'],
  },
  {
    date: '27/07/2023, 10:53',
    values: ['+R$50 reais', '+T$1.257'], // Duas transações na mesma linha
    balances: ['R$40,00', 'T$1.257'],
    additionalInfo: ['Conta Safe 20', 'T$ Diário - 76'],
    types: ['Premiação Conta Safe', 'Recompensa diária'],
  },
];
