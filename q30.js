function calculateTotalDeposits(...deposits) {
    return deposits.reduce((total, deposit) => total + deposit, 0);
}
console.log(calculateTotalDeposits(100, 200, 300)); 