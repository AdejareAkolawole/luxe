document.addEventListener('DOMContentLoaded', () => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times');
    });

    // Close menu when a nav link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.querySelector('i').classList.add('fa-bars');
            hamburger.querySelector('i').classList.remove('fa-times');
        });
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth' });
        });
    });

    // Cart functionality
    let cartCount = 0;
    const cartCounter = document.querySelector('.cart-count');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = button.getAttribute('data-product');
            cartCount++;
            cartCounter.textContent = cartCount;
            alert(`${product} has been added to your cart!`);
        });
    });

    // Category filtering
    const categoryButtons = document.querySelectorAll('.category-buttons button');
    const productCards = document.querySelectorAll('.product-card');

    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');

            // Update active button
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Filter products
            productCards.forEach(card => {
                const cardCategory = card.getAttribute('data-category');
                if (category === 'all' || cardCategory === category) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeIn 0.5s ease-in';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });

    // Dropdown menu for categories in navbar
    const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.getAttribute('data-category');
            const shopSection = document.querySelector('#shop');
            shopSection.scrollIntoView({ behavior: 'smooth' });

            // Trigger category filter
            const categoryButton = document.querySelector(`.category-buttons button[data-category="${category}"]`);
            categoryButton.click();
        });
    });

    // Newsletter button alert (mockup)
    const newsletterButton = document.querySelector('.newsletter-button');
    newsletterButton.addEventListener('click', () => {
        const emailInput = document.querySelector('.newsletter input').value;
        if (emailInput) {
            alert(`Thank you for subscribing with ${emailInput}!`);
        } else {
            alert('Please enter a valid email address.');
        }
    });
});