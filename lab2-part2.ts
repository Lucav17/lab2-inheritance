class SavingsAccount {

  constructor(
    private initialBalance: number;
    private ownerName: string;
    private count:number = 0;
  );

  deposit(depositAmount: number) {
    this.initialBalance = this.initialBalace + depositAmount;
  }

  withdraw(withdrawAmount: number)
    if(this.count < 3) {
      this.initialBalance = this.initialBalace - withdrawAmount;
      this.count++;
    }


  checkBalance() {
    console.log("${ownerNAme} have $${initialBalance} remaining");
  }

}
