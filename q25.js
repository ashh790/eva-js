function findMostActiveCustomer(customers) {
    return customers.reduce((mostActive, customer) =>
        customer.transactions > mostActive.transactions ? customer : mostActive
    );
}
console.log(findMostActiveCustomer())