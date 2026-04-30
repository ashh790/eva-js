function checkOrderStatus() {
    return new Promise((resolve, reject) => {
        const approved = true;
        setTimeout(() => {
            if (approved) resolve("Loan approved.");
            else reject("Loan denied.");
        }, 1000);
    });
}
