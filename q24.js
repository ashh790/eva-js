const accounts = [{ balance: 1000 }, { balance: 2000 }, { balance: 3000 }];
const withInterest = accounts.map(account => ({ ...account, balance: account.balance * 1.05 }));
const highBalance = accounts.filter(account => account.balance > 1500);
const totalDeposits = accounts.reduce((sum, account) => sum + account.balance, 0);