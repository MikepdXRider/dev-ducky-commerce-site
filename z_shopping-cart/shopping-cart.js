import { renderLineItems } from './render-line-items.js';
import { calcOrderTotal } from './shopping-cart-utils.js';
// import { productsArray } from '../z_products/duckys.js';
import { getCart, clearCart } from '../cart-api.js';
import { getProducts } from '../z_admin-page/admin-utils.js';

const cart = getCart();
const products = getProducts();

const tBodyEl = document.querySelector('#t-body');
const tdCartTotal = document.getElementById('cart-total');
const checkoutButton = document.getElementById('checkout-button');


for (let obj of cart) {
    const newTD = renderLineItems(obj);
    tBodyEl.append(newTD);
}

 
const cartTotal = calcOrderTotal(cart, products);
tdCartTotal.textContent = cartTotal;


checkoutButton.addEventListener('click', () => {
    const cartContents = getCart();
    const cartContentsString = JSON.stringify(cartContents, true, 2);
    alert(cartContentsString);

    clearCart();

    window.location = '../index.html';
});

