const  deliveryCharge=20;
function calculateTotalCost(price, quantity) {
    const totalCost = price * quantity + deliveryCharge;
    return totalCost;
}  

class order{
    constructor(price, quantity){
        this.price=price;
        this.quantity=quantity;
    }
    getTotalCost(){
        return calculateTotalCost(this.price, this.quantity);
    }
}