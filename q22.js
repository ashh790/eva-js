const increaseBalances = function (accounts) {
    return accounts.map(account => ({ ...account, balance: account.balance + 100 }));
};
console.log(increaseBalances([{ balance: 1000 }, { balance: 2000 }, { balance: 3000 }]));