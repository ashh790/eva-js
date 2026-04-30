function validateForm(name, email, password) {
    const nameRegex = /^[A-Za-z]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!nameRegex.test(name)) return "Invalid name.";
    if (!emailRegex.test(email)) return "Invalid email.";
    if (password.length < 8) return "Password must be at least 8 characters.";
    return "Valid form.";
}