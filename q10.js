const orderDetails = { orderId: 1, customerName: "John", orderAmount: 500 };
localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
const retrievedOrder = JSON.parse(localStorage.getItem("orderDetails"));
console.log(retrievedOrder);