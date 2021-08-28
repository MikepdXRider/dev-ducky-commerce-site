import { checkCartStatus } from './cart-api.js';

export const cartLinkNodeList = document.querySelectorAll('.cart-link');
// Check cart if empty before allowing link to go through.


for (let i = 0; i < cartLinkNodeList.length; i++){
    const checkCart = checkCartStatus();
    if (checkCart === false) {
        cartLinkNodeList[i].style.visibility = 'hidden';
    }
}

const adminAccess = document.querySelector('.password-div');

adminAccess.addEventListener('click', () => {
    const password = prompt('Password:');
    if (password === 'ducky'){
        adminAccess.style.zIndex = -1;
        window.location = './z_admin-page/index.html';
    } else {
        alert('Incorrect password');
    }
});