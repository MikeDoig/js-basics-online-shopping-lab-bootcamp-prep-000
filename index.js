var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  
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
  var sum = sumUpPrices();
  return sum;
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
