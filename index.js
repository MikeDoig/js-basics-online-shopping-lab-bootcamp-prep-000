var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}
function creatPrice(itemPrice) {
  
}
function createCartItemAndPrice(itemName) {
  return {itemName:itemName, itemPrice:Math.floor(Math.random()*100)};
}
function addToCart(item) {
var thing = createCartItemAndPrice(item);
getCart().push(thing);
  return `${thing.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  else if (cart.length === 1) {
      return `In your cart, you have ${thing.itemName} at $${thing.itemPrice}.`;
  }
  else if (cart.length > 1) {
    return`In your cart, you have ${thing.itemName[i]} at $${thing.itemPrice[i]}, and ${thing.itemName[i + 1]} at $${thing.itemPrice[i + 1]}.`;
  }
  
}

function total() {

}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {

}

