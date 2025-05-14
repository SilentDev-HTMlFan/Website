document.addEventListener('DOMContentLoaded', function() {
    // Sidebar functionality
    const menuButton = document.querySelector('.menu-button');
    const closeSidebar = document.querySelector('.close-sidebar');
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    menuButton.addEventListener('click', function() {
        sidebar.classList.add('active');
        mainContent.classList.add('shifted');
    });

    closeSidebar.addEventListener('click', function() {
        sidebar.classList.remove('active');
        mainContent.classList.remove('shifted');
    });

    // Search functionality
    const searchButton = document.getElementById('search-button');
    const searchBar = document.getElementById('search-bar');

    searchButton.addEventListener('click', function() {
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            searchBar.focus();
        }
    });

    // Close search when clicking outside
    document.addEventListener('click', function(event) {
        if (!searchButton.contains(event.target) && !searchBar.contains(event.target)) {
            searchBar.classList.remove('active');
        }
    });

    // Button ripple effect
    const ctaButton = document.getElementById('cta-button');
    
    ctaButton.addEventListener('click', function(event) {
        // Create ripple effect
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        this.appendChild(ripple);
        
        // Get click position
        const rect = this.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;
        
        // Position ripple
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        
        // Remove ripple after animation
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Simple alert for demo purposes
        setTimeout(() => {
            alert("Thanks for your interest! This is a refined demo with all requested features.");
        }, 300);
    });
    
    // Card hover effects
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        });
    });
});