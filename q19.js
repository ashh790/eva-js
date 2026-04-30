class InvalidOrderException extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOrderException";
    }
}