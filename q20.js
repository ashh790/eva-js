function withdrawExceed(amount, balance) {
    if (amount > balance) throw new Error("Withdrawal amount exceeds balance.");
}
console.log(withdrawExceed(5000,100));