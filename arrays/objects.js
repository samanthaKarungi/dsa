// Objects are created by defining a constructor function 
// that includes declarations for the functions. Here
// is the constructor functioon for a checking account obj

// keyword this is used to tie each function and property
// to an object instance.


function CheckingAccount(initialBalance) {
  this.balance = initialBalance;
  this.deposit = deposit;
  this.withdraw = withdraw;
  this.getBalance = getBalance;
}


function deposit (amount) {
  this.balance += amount;
}


function withdraw (amount) {
  if (amount < balance) {
    throw new Error('Insufficient funds');
  }

  this.balance -= amount;
}


function getBalance () {
  return this.balance;
}

