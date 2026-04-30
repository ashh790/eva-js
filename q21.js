const calculateBill = (balance, rate = 0.05) => balance * rate;
console.log(calculateBill(200*5));