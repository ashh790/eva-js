function filterHighValueorders(account, limit) {
    return accounts.filter(account => account.balance > limit);
}
console.log(filterHighValueorders(50,10));