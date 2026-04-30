class DeliveryStafff {
    getSalary() {
        throw new Error("Abstract method getSalary() must be implemented");
    }
    getRole() {
        throw new Error("Abstract method getRole() must be implemented");
    }
}

class DeliveryAgentt extends DeliveryStafff {
    getSalary() {
        return 30000;
    }
    getRole() {
        return "Delivery Agent";
    }
}

class Managerr extends DeliveryStafff {
    getSalary() {
        return 50000;
    }
    getRole() {
        return "Manager";
    }
}
