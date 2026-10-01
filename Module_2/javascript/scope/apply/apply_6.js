function calculateCartTotal(cart) {
    let total = 0; // Function-scoped variable for the cart total

    cart.forEach(item => {
        let itemTotal = item.price * item.quantity; // Function-scoped variable for each item
        if (item.isDiscounted) {
            itemTotal *= 0.9; // Apply a 10% discount if applicable
        }
        total += itemTotal;
    });

    return total;
}

const shoppingCart = [
    { price: 20, quantity: 2, isDiscounted: true },
    { price: 15, quantity: 1, isDiscounted: false }
];

console.log("Cart Total:", calculateCartTotal(shoppingCart));