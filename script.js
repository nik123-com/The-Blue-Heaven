console.log('Welcome to javascript');
document.getElementById('search').addEventListener('input', function () {
    const searchTerm = this.value.toLowerCase();
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        const itemName = card.querySelector('h2').textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
let cartCount = 0;
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', function () {
        cartCount++;
        document.getElementById('cart').innerHTML = `
            <i class="fa-solid fa-cart-shopping" style="color: white; font-size: 20px; margin-left: 90px;"></i>
            <span style="color: yellow; font-size: 14px; margin-left: 5px;">(${cartCount})</span>`;
    });
});
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('menu li a');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
            navLinks.forEach(link => link.classList.remove('active'));
            document
                .querySelector(`menu li a[href="#${section.id}"]`)
                ?.classList.add('active');
        }
    });
});
document.getElementById('submit').addEventListener('click', function (e) {
    e.preventDefault(); 
    alert('Thanks for your feedback!');
    document.querySelector('.contact-box form').reset(); 
});
window.addEventListener('load', () => {
    const images = Array.from(document.querySelectorAll('img')).map(img => img.src);
    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
        card.style.transition = 'transform 0.3s ease';
        card.style.zIndex = '1'; 
    });
    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
        card.style.zIndex = '0'; 
    });
});
const navBar = document.querySelector('menu'); 
if (navBar) {
    navBar.style.position = 'sticky'; 
    navBar.style.zIndex = '10';
}
//cart magic
document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        const itemName = card.querySelector('h2')?.textContent.trim(); 
        const itemPrice = card.querySelector('.price')?.textContent.trim(); 
        if (!itemName || !itemPrice) {
            alert('Error: Item details are missing.');
            return;
        }
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push({ name: itemName, price: itemPrice });        
        localStorage.setItem('cart', JSON.stringify(cart));
    });
});