async function fetchCustomerBalance() {
    try {
        const balance = await Promise.resolve(1000);
        console.log(`Balance: ${balance}`);
    } catch (error) {
        console.error(error);
    }
}
