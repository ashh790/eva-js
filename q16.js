let orderCount = 0;
function increment() {
    orderCount++;
    console.log(orderCount);
}
function decrement() {
    orderCount = Math.max(0, orderCount - 1);
    console.log(orderCount);
}
function reset() {
    orderCount = 0;
    console.log(orderCount);
}
