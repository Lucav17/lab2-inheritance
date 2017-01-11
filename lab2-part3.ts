class Account {
     balance: number;
     owner: string;

    constructor(initialBalance: number, owner: string) {
        this.balance = initialBalance;
        this.owner = owner;
    }

    deposit(amount: number) {
        this.balance = this.balance + amount;
    }
    withdraw(amount: number) {
        this.balance = this.balance - amount;
    }
    checkBalance() {
        console.log(`${this.owner} account balance: $${this.balance}`);
    }
}

class CheckingsAccount extends Account {
    constructor(initialBalance: number, owner: string) {
        super(initialBalance, owner);
    }
}

class SavingsAccount extends Account {
    private withdrawals: number = 0;
    constructor(initialBalance: number, owner: string) {
        super(initialBalance, owner);
    }
    withdraw(amount: number) {
        if (this.withdrawals <= 3) {
            this.withdrawals++;
            this.balance = this.balance - amount;
        } else {
            console.log("Sorry, you've exceed 3 withdrawals already!");
        }
    }
}


let checkingsAccount = new CheckingsAccount(28, "Luca");
checkingsAccount.checkBalance();
checkingsAccount.deposit(10);
checkingsAccount.checkBalance();
checkingsAccount.withdraw(80);
checkingsAccount.checkBalance();

let savingsAccount = new SavingsAccount(100, "All");
savingsAccount.checkBalance();
savingsAccount.deposit(50);
savingsAccount.checkBalance();
