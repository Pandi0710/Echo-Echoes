const conservationFacts = [
    "Did you know? Protecting one acre of forest can absorb up to 2.6 tons of CO2 annually.",
    "Over 1 million species are at risk of extinction due to human activity.",
    "Reforestation efforts can increase local water availability by up to 20%.",
    "Every product purchase at Echo-Echoes supports wildlife habitat restoration."
];

function showConservationFact() {
    const randomIndex = Math.floor(Math.random() * conservationFacts.length);
    document.getElementById('fact-display').textContent = conservationFacts[randomIndex];
}

let cart = [];

function addToCart(itemName, price) {
    cart.push({ name: itemName, price: price });
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartDisplay = document.getElementById('cart-display');
    if (cart.length > 0) {
        const total = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
        cartDisplay.textContent = `Cart: ${cart.length} items - Total: $${total}`;
    } else {
        cartDisplay.textContent = 'Cart is empty.';
    }
}

function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent. We’ll get back to you at ${email}.`);
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('message').value = '';
    } else {
        alert('Please fill in all fields.');
    }
}

// Show a fact on page load
window.onload = showConservationFact;