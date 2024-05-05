const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];

// Add 'Meat' in the beginning of your shopping cart if it has not been already added
if (!shoppingCart.includes('Meat')) {
    shoppingCart.unshift('Meat');
}

// Add 'Sugar' at the end of your shopping cart if it has not been already added
if (!shoppingCart.includes('Sugar')) {
    shoppingCart.push('Sugar');
}

// Remove 'Honey'
const indexToRemove = shoppingCart.indexOf('Honey');
if (indexToRemove !== -1) {
    shoppingCart.splice(indexToRemove, 1);
}

// Modify 'Tea' to 'Green Tea'
const indexToModify = shoppingCart.indexOf('Tea');
if (indexToModify !== -1) {
    shoppingCart[indexToModify] = 'Green Tea';
}

console.log("Updated Shopping Cart:", shoppingCart);
