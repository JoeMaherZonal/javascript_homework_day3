var Bank = require('../bank').bank;
var Account = require('../bank').account;
var assert = require('chai').assert;


describe("Bank", function(){

  beforeEach(function(){
    bank = new Bank("Santander");
    account1 = new Account("Joe Maher", "personal");
    account2 = new Account("Rachel Barry", "personal");
    account3 = new Account("Lilly Jazz", "business");
    account1.balance = 0;
    account2.balance = 0;
    account3.balance = 0;
  })

  it('Check bank account is empty when initiated', function(){
    assert.deepEqual([], bank.accounts)
  })

  it('add account to bank', function(){
    bank.addAccount(account1)
    assert.deepEqual(1, bank.accounts.length)
    assert.deepEqual(account1, bank.accounts[0])
    assert.deepEqual("Joe Maher", bank.accounts[0].name)
    assert.deepEqual(0, bank.accounts[0].balance)
  })

  it('remove account from bank', function(){
    bank.addAccount(account1)
    assert.deepEqual(account1, bank.accounts[0])

    bank.removeAccount(account1)
    assert.deepEqual([], bank.accounts)
  })

  it('find account', function(){
    bank.addAccount(account1)
    bank.addAccount(account2)
    bank.addAccount(account3)

    assert.deepEqual(account2, bank.findAccount(account2))
  })

  it('find account with largest balance', function(){
    bank.addAccount(account1)
    bank.addAccount(account2)
    bank.addAccount(account3)
    account1.deposit(100)
    account2.deposit(200)
    account3.deposit(300)

    assert.deepEqual(account3, bank.largestAccount())
  })

  it('find total of all accounts', function(){
    bank.addAccount(account1)
    bank.addAccount(account2)
    bank.addAccount(account3)
    account1.deposit(100)
    account2.deposit(200)
    account3.deposit(300)

    assert.deepEqual(600, bank.totalOfAccounts())
  })

  it('find total of accounts of type personal and business', function(){
    bank.addAccount(account1)
    bank.addAccount(account2)
    bank.addAccount(account3)
    account1.deposit(100)
    account2.deposit(200)
    account3.deposit(300)

    assert.deepEqual(300, bank.totalOfAccountsType("personal"))
    assert.deepEqual(300, bank.totalOfAccountsType("business"))
  })

  it('find average balance of all accounts', function(){
    bank.addAccount(account1)
    bank.addAccount(account2)
    bank.addAccount(account3)
    account1.deposit(100)
    account2.deposit(200)
    account3.deposit(300)

    assert.deepEqual(200, bank.averageOfAccounts())
  })

})

describe("Account", function(){

  beforeEach(function(){
    account1 = new Account("Joe Maher", "personal");
    account2 = new Account("Rachel Barry", "personal");
    account3 = new Account("Lilly Jazz", "business");
    account1.balance = 0;
    account2.balance = 0;
    account3.balance = 0;
  })

  it('check account is empty when initiated', function(){
    assert.deepEqual(0, account1.balance )
  })

  it('deposit in account', function(){
    account1.deposit(100)
    assert.deepEqual(100, account1.balance)
  })

  it('withdraw in account', function(){

    account1.deposit(100)
    account1.withdraw(99)
    assert.equal(1, account1.balance)
  })

  it('check you cant withdraw more than you have', function(){

    account1.deposit(100)
    account1.withdraw(101)
    assert.equal(100, account1.balance)
  })


})