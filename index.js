var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  function createCartItem(item) {
  return {item:itemName, itemPrice:Math.random(1,100)};
}
  cart = new Object ({itemName: 'name of item', itemPrice: 'price of item'});
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

function createCartItem(item) {
  return {item:itemName, itemPrice:Math.random(1,100)};
}
