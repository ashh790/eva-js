function OrderFailed(amount, atmCash) {
    if (amount > atmCash) throw new Error("Server Down Sorry");
}
try {
    OrderFailed(500, 300);
} catch (error) {
    console.error(error.message);
}
