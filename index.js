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
function fullCart() {
  var thingsInCart = 'In your cart, you have ';
  if (getCart.length === 1) {
    return thingsInCart + `${getCart()[0].itemName} at $${getCart()[0].itemPrice}.`;
  }
  else if (getCart.length > 1) {
    var otherThingsInCart = ' ';
    for (let i=1, )
    return thingsInCart +
  }
}
}
function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  else {
    return fullCart();
  }
  
  // else if (cart.length > 1) {
  //   return`In your cart, you have ${thing.itemName[i]} at $${thing.itemPrice[i]}, and ${thing.itemName[i + 1]} at $${thing.itemPrice[i + 1]}.`;
  // }
  
}

function total() {

}

function removeFromCart(item) {

}

function placeOrder(cardNumber) {

}

