function getOrderInfo<T>(order: T): T {
    return order;
}
console.log(getOrderInfo({ orderId: 123, customerName: "John Doe", totalAmount: 99.99 }));