class CheckingsAccount {
  constructor(
    private initialBalance: number;
    private ownerName: string;
  );

  deposit(depositAmount: number) {
    this.initialBalance = this.initialBalace + depositAmount;
  }

  withdraw(withdrawAmount: number) {
    this.initialBalance = this.initialBalace - withdrawAmount;
  }

  checkBalance() {
    console.log("${ownerNAme} have $${initialBalance} remaining");
  }
}
