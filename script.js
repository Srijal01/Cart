let cart = [];

function addToCart(id, name, price) {
    let found = false;
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart[i].quantity += 1;
            found = true;
            break;
        }
    }
    if (!found) {
        cart.push({ id: id, name: name, price: price, quantity: 1 });
    }
    updateCart();
}

function removeFromCart(id) {
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].id === id) {
            cart.splice(i, 1);
            break;
        }
    }
    updateCart();
}

function clearCart() {
    cart = [];
    updateCart();
}

function calculateTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        total += cart[i].price * cart[i].quantity;
    }
    return total;
}

function updateCart() {
    let cartDiv = document.getElementById('cart-items');
    let totalSpan = document.getElementById('total-amount');
    
    if (cart.length === 0) {
        cartDiv.innerHTML = '<p>Your cart is empty</p>';
        totalSpan.innerHTML = '0';
        return;
    }
    
    let html = '';
    for (let i = 0; i < cart.length; i++) {
        let item = cart[i];
        html += '<div class="cart-item">';
        html += item.name + ' - Rs ' + item.price + ' x ' + item.quantity;
        html += ' = Rs ' + (item.price * item.quantity);
        html += ' <button onclick="removeFromCart(' + item.id + ')">Remove</button>';
        html += '</div>';
    }
    
    cartDiv.innerHTML = html;
    totalSpan.innerHTML = calculateTotal();
}
