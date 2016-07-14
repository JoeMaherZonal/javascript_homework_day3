var Bank = function(name){
  //atributes
  this.name = name;
  this.accounts = [];
}

Bank.prototype = {
  clear: function(){
    this.accounts = [];
  },

  addAccount: function(account){
    this.accounts.push(account);
  },

  removeAccount: function(bankAccount){
    for(account of this.accounts){
      if(account.name === bankAccount.name){
        var i = this.accounts.indexOf(account);
        this.accounts.splice(i, 1);
      };
    };
  },

  findAccount: function(bankAccount){
    for(account of this.accounts){
      if(account.name === bankAccount.name){
        return account;
      };
    };
  },

  largestAccount: function(bankAccount){
    if (bank.accounts.length === 0) {
      return
    }

    var largestAccount = {"balance": 0};

    for(account of this.accounts){
      if(account.balance > largestAccount.balance){
        largestAccount = account;
      };
    };
    return largestAccount;
  },

  totalOfAccounts: function(){
    var total = 0;

    for(account of this.accounts){
        total += account.balance;
    };
    return total;
  },

  totalOfAccountsType: function(type){
    var total = 0;

    for(account of this.accounts){
      if(account.type === type){
        total += account.balance;
      }
    };
    return total;
  },

  averageOfAccounts: function(){
    var total = this.totalOfAccounts();
    return total / this.accounts.length;
  }

}


//accounts

var Account = function(name, type){
  //atributes
  this.name = name;
  this.balance = 0;
  this.type = type
}

Account.prototype = {
  deposit: function(depositAmount){
    this.balance += depositAmount;
  },

  withdraw: function(withdrawAmount){
    if(this.balance >= withdrawAmount){
    this.balance = this.balance - withdrawAmount;
    }else{
      return
    }
  }

}

module.exports.bank = Bank;
module.exports.account = Account;