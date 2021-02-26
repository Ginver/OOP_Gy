// Export your class here as module.exports = MyClass
const BusinessAccount extends Account {
   constructor(name, balance, creditLimit, sepaPermission) {
      super(name, balance, creditLimit);
      this.dailyLimit = 20000;
      this.sepaPermission = sepaPermission;
    }
// }
// class BusinessAccount {
//     constructor(name, balance, creditLimit, sepaPermission) {
//         console.log("WHAT IS NAME?", name);
//         this.name = name;
//         this.balance = balance;
//         this.creditLimit = creditLimit;
//         this.sepaPermission = sepaPermission;
//     }
//     makeDeposit(amount) {
//         //console.log("STORTING!", this.balance);
//         if (amount > 0) {
//             this.balance = this.balance + amount;
//             console.log(this.balance);
//         }
//     }
//     makeWithdrawal(amount) {
//         if (amount < this.balance + this.creditLimit && amount < 20000) {
//             this.balance = this.balance - amount;
//             console.log(this.balance);
//         }
//         }
    sepaInvoice(amount) {
        if (amount > 0 && this.sepaPermission === true) {
        const transactionCost = amount * 0.99;
        console.log(transactionCost);
        this.balance = this.balance + transactionCost
        console.log(this.balance);
        }
    }
    }



module.exports = BusinessAccount;
