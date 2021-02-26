// Export your class here as module.exports = MyClass
class Account {
    constructor(name, balance, creditLimit) {
        console.log("what is name?", name);
        this.name = name;
        this.balance = balance;
        this.creditLimit = creditLimit;
    }
    makeDeposit(amount) {
        console.log("STORTING!", amount, this.balance);

        console.log("NEGATIVE?", amount < 0, amount);
        if (amount > 0) {
            this.balance = this.balance + amount;
        }
    }
    makeWithdrawal(amount) {
        //    console.log("function true?", this.balance);


        if (amount < this.balance + this.creditLimit && amount < 5000) {
            // this.creditLimit = this.balance + this.creditLimit
            console.log("Sorry, amount is bigger then your limit.");
            this.balance = this.balance - amount;
            console.log(this.balance);
        }
    }
}

module.exports = Account;


