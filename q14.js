function validateLogin(email, password) {
    const storedData = JSON.parse(localStorage.getItem("customerData"));
    if (storedData.email === email && storedData.password === password) {
        alert("Login successful");
    } else {
        alert("Invalid credentials");
    }
}