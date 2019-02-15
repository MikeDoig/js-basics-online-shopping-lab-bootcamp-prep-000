var cart = [];
function getCart() {
 return cart;
}
function setCart(c) {
  cart = c;
  return cart;
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
  if (getCart().length >= 1) {
    thingsInCart = thingsInCart + `${getCart()[0].itemName} at $${getCart()[0].itemPrice}`;
  }
  if (getCart().length >= 2) {
    var otherThingsInCart = '';
    for (let i=1; i < getCart().length - 1; i++) {
    otherThingsInCart = otherThingsInCart + `, ${getCart()[i].itemName} at $${getCart()[i].itemPrice}`;
  }
    thingsInCart = thingsInCart + `${otherThingsInCart}, and ${getCart()[getCart().length - 1].itemName} at $${getCart()[getCart().length - 1].itemPrice}`;
  }
  return `${thingsInCart}.`;
}
function viewCart() {
  if (cart.length === 0) {
    return 'Your shopping cart is empty.';
  }
  else {
    return fullCart();
  }
}
function total() {
  var sum = 0;
  for (let i=0; i < getCart().length; i++) {
    sum = sum + getCart()[i].itemPrice;
  }
  return sum;
}


// function searchCart(item) {
//   var search;
//   for (let i=0; i<getCart().length; i++) {
//     if (getCart()[i].itemName == itemName) {
//     search = getCart()[i];
//   }
//     else {
//     search = 'That item is not in your cart.';
//     }
//   }
//   return search;
// }
// function removeFromCart(item) {
//   function searchCart(item) {
//   var search;
//   for (let i=0; i<getCart().length; i++) {
//     if (getCart()[i].item == item) {
//     search = cart.indexOf(getCart()[i]);
//     return getCart().splice(search,1);
//   }
//     else {
//     search = 'That item is not in your cart.';
//     return search;
//     }
//   }
//   }
// }



function removeFromCart(itemName) {
  function searchCart(itemName) {
  var search
  for (var i=0; i<getCart().length; i++) {
    if (getCart()[i].itemName === itemName) 
    {search = getCart()[i]}
  }
  return search
}
function removeItem(item) {
  var indexOfItem = cart.indexOf(item)
  getCart().splice(indexOfItem,1)
}
  var item = searchCart(itemName)
  if (item == removeItem(item)){
  return item
  }
  else {
  return 'That item is not in your cart.'
  }
}

function placeOrder(cardNumber) {

}



