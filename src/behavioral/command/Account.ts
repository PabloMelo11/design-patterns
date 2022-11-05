export default class Account {
  private balance = 0;

  constructor(readonly number: string) {}

  getBalance() {
    return this.balance;
  }

  debit(amount: number) {
    this.balance -= amount;
  }

  credit(amount: number) {
    this.balance += amount;
  }
}
