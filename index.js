var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function createCartItem(itemName) {
  return {itemName:itemName, itemPrice:Math.random(1,100)};
}

function addToCart(item) {
var thing = createCartItem(item);
getCart().push(thing);
  return `${thing.itemName} has been added to your cart.`;
}

function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  else {
    const contents = [];
    for (let i=0, l=cart.length; i<l; i++){
    contents.push(`${i + 1}. ${cart[i]}`);
  }
  return `In your cart, you have ${contents.join('at $')}.`;
  }
}

function total() {

}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {

}

