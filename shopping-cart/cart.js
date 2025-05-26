//add methods addItem(cart, item, quantity), removeItem(cart, item), getTotalItems(cart)

function addItem(cart, item, quantity){
    if (quantity <= 0){
        return undefined;
    }
    return cart.push({item, quantity});
};

function removeItem(cart, item){
    return cart.filter(cartItem => cartItem.item !== item)
};

function getTotalItems(cart){
     let total = 0;
    for (const cartItem of cart) {
    total += cartItem.quantity;
  }
     return total;
};

module.exports = { addItem, removeItem, getTotalItems };