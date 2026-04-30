class Order {
    constructor(orderId, customerName, orderAmount) {
        this.orderId = orderId;
        this.customerName = customerName;
        this.orderAmount = orderAmount;
    }
}

// 4. Define an abstract class DeliveryStaff
class DeliveryStaff {
    getSalary() {
        throw new Error("Abstract method getSalary() must be implemented");
    }
    getRole() {
        throw new Error("Abstract method getRole() must be implemented");
    }
}

class DeliveryAgent extends DeliveryStaff {
    getSalary() {
        return 30000;
    }
    getRole() {
        return "Delivery Agent";
    }
}

class Manager extends DeliveryStaff {
    getSalary() {
        return 50000;
    }
    getRole() {
        return "Manager";
    }
}

// 5. Create an interface Service
class Service {
    provideService() {
        throw new Error("Method provideService() must be implemented");
    }
}

class DeliveryAgentWithService extends DeliveryAgent {
    provideService() {
        return "Delivering orders to customers";
    }
}

// 6. Generic function getOrderInfo<T>
function getOrderInfo(info) {
    return info;
}

// 7. Create a class Restaurant
class Restaurant {
    constructor(restaurantName, location, rating) {
        this.restaurantName = restaurantName;
        this.location = location;
        this.rating = rating;
    }
}

// 8. Define a class SupportExecutive
class SupportExecutive {
    constructor(name, employeeId, department, experience) {
        this.name = name;
        this.employeeId = employeeId;
        this.department = department;
        this.experience = experience;
    }
    displayInfo() {
        console.log(`Name: ${this.name}, ID: ${this.employeeId}, Department: ${this.department}, Experience: ${this.experience} years`);
    }
}

// 9. Add <li> element to <ul>
const ul = document.querySelector("ul");
const li = document.createElement("li");
li.textContent = "Order status updated";
ul.appendChild(li);

// 10. Store and retrieve order details using localStorage
const orderDetails = { orderId: 1, customerName: "John", orderAmount: 500 };
localStorage.setItem("orderDetails", JSON.stringify(orderDetails));
const retrievedOrder = JSON.parse(localStorage.getItem("orderDetails"));
console.log(retrievedOrder);

// 11. Event listener to display total orders
document.querySelector("button").addEventListener("click", () => {
    const totalOrders = 10; // Example value
    alert(`Total orders placed: ${totalOrders}`);
});

// 12. Customer registration form validation
function validateRegistrationForm(name, email, password) {
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!nameRegex.test(name)) throw new Error("Invalid name");
    if (!emailRegex.test(email)) throw new Error("Invalid email");
    if (password.length < 8) throw new Error("Password must be at least 8 characters");
    return true;
}

// 13. Store validated customer registration data in localStorage
const customerData = { name: "Alice", email: "alice@example.com", password: "password123" };
localStorage.setItem("customerData", JSON.stringify(customerData));

// 14. Login form validation
function validateLogin(email, password) {
    const storedData = JSON.parse(localStorage.getItem("customerData"));
    if (storedData.email === email && storedData.password === password) {
        alert("Login successful");
    } else {
        alert("Invalid credentials");
    }
}

// 15. Counter for daily orders
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

// 16. Handle errors with try/catch
try {
    const deliveryAddress = null;
    if (!deliveryAddress) throw new Error("Delivery address is missing");
} catch (error) {
    console.error(error.message);
}

// 17. Exception propagation
function placeOrder() {
    throw new Error("Restaurant unavailable");
}
try {
    placeOrder();
} catch (error) {
    console.error(error.message);
}

// 18. Use finally block
try {
    console.log("Placing order...");
} finally {
    console.log("Order records updated");
}

// 19. User-defined exception
class InvalidOrderException extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOrderException";
    }
}
try {
    throw new InvalidOrderException("Invalid order details");
} catch (error) {
    console.error(error.message);
}

// 20. Throw error for exceeding payment limits
function checkOrderAmount(amount) {
    const limit = 10000;
    if (amount > limit) throw new Error("Order amount exceeds payment limit");
}
try {
    checkOrderAmount(15000);
} catch (error) {
    console.error(error.message);
}

// 21. Arrow function calculateBill
const calculateBill = (items, deliveryCharge) => items.reduce((total, item) => total + item, 0) + deliveryCharge;

// 22. Anonymous function to increase order amounts
const increaseOrderAmounts = function (orders) {
    return orders.map(order => ({ ...order, orderAmount: order.orderAmount + 100 }));
};

// 23. Named function filterHighValueOrders
function filterHighValueOrders(orders, threshold) {
    return orders.filter(order => order.orderAmount > threshold);
}

// 24. Demonstrate array methods
const orders = [{ orderAmount: 500 }, { orderAmount: 1500 }, { orderAmount: 3000 }];
const ordersWithDelivery = orders.map(order => ({ ...order, total: order.orderAmount + 50 }));
const highValueOrders = orders.filter(order => order.orderAmount > 1000);
const totalRevenue = orders.reduce((total, order) => total + order.orderAmount, 0);

// 25. Find most frequent customer
function findMostFrequentCustomer(customers) {
    const frequency = {};
    customers.forEach(customer => {
        frequency[customer] = (frequency[customer] || 0) + 1;
    });
    return Object.keys(frequency).reduce((a, b) => (frequency[a] > frequency[b] ? a : b));
}

// 26. Array and object destructuring
const customer = { name: "John", orders: 5 };
const { name, orders: totalOrders } = customer;
const restaurant = ["Pizza Place", "New York", 4.5];
const [restaurantName, location, rating] = restaurant;

// 27. Promise for delivery status
const checkDeliveryStatus = new Promise((resolve, reject) => {
    const delivered = true;
    setTimeout(() => (delivered ? resolve("Delivered") : reject("Not delivered")), 1000);
});
checkDeliveryStatus.then(console.log).catch(console.error);

// 28. Async/await for fetching invoice
async function fetchInvoice() {
    const invoice = await new Promise(resolve => setTimeout(() => resolve("Invoice #123"), 1000));
    console.log(invoice);
}
fetchInvoice();

// 29. Default parameter for delivery charges
function calculateDeliveryCharge(distance, chargePerKm = 5) {
    return distance * chargePerKm;
}

// 30. Rest parameter for total cost
function calculateTotalCost(...items) {
    return items.reduce((total, item) => total + item, 0);
}