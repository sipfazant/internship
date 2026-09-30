// Load navbar
fetch("components/navbar.html")
    .then(response => {
        if (!response.ok) {
            throw new Error("Navbar kon niet geladen worden.");
        }

        return response.text();
    })
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    })
    .catch(error => {
        console.error(error);
    });

// Navbar scroll behavior
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
    const navbarContainer = document.getElementById('navbar');
    const navbar = document.querySelector('.navbar');

    if (!navbarContainer || !navbar) return;

    const currentScrollY = window.scrollY;

    if (Math.abs(currentScrollY - lastScrollY) < 15) {
        return;
    }

    // Hide/show navbar
    if (currentScrollY <= 0 || currentScrollY < lastScrollY) {
        navbarContainer.classList.remove('nav-hidden');
    } else {
        navbarContainer.classList.add('nav-hidden');
    }

    if (currentScrollY > window.innerHeight) {
        navbar.classList.add('scrolled');
        navbar.classList.add('logo-light');
    } else {
        navbar.classList.remove('scrolled');
        navbar.classList.remove('logo-light');
    }

    lastScrollY = currentScrollY;
});

// Load footer
fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });