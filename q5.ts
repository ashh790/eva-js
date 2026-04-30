class Servicee {
    provideService() {
        throw new Error("Method provideService() must be implemented");
    }
}

class DeliveryAgentWithServicee extends DeliveryAgent {
    provideService() {
        return "Delivering orders to customers";
    }
}