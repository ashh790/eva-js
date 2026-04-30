// Create
function createAccount(account) {
    db.query("INSERT INTO accounts SET ?", account, (err) => {
        if (err) console.log(err);
        else console.log("Account created successfully.");
    });
}

// Read
function readAccounts() {
    db.query("SELECT * FROM accounts", (err, results) => {
        if (err) console.log(err);
        else console.log(results);
    });
}

// Update
function updateAccount(accountNumber, newHolderName) {
    db.query("UPDATE accounts SET holderName = ? WHERE accountNumber = ?", [newHolderName, accountNumber], (err) => {
        if (err) console.log(err);
        else console.log("Account updated successfully.");
    });
}

// Delete
function deleteAccount(accountNumber) {
    db.query("DELETE FROM accounts WHERE accountNumber = ?", [accountNumber], (err) => {
        if (err) console.log(err);
        else console.log("Account deleted successfully.");
    });
}


// createAccount({ accountNumber: 101, holderName: "John Doe", balance: 1000 });
// readAccounts();
// updateAccount(101, "Jane Doe");
// deleteAccount(101);

