// Mobile Menu Toggle
function toggleMobileMenu() {
    document.querySelector('.sidebar').classList.toggle('sidebar-open');
    document.querySelector('.mobile-menu-toggle').classList.toggle('active');
}

function closeMobileMenu() {
    document.querySelector('.sidebar').classList.remove('sidebar-open');
    document.querySelector('.mobile-menu-toggle').classList.remove('active');
}

// Active section highlighting on scroll
const sections = document.querySelectorAll('section[id], header[id]');
const navItems = document.querySelectorAll('.nav-item');

function updateActiveNav() {
    let current = '';
    const scrollPosition = window.scrollY + 300;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navItems.forEach(item => {
        item.classList.remove('active');
        if (item.getAttribute('href') === '#' + current) {
            item.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);
// Call once on load to set initial state
updateActiveNav();
