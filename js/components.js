fetch("components/navbar.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("navbar").innerHTML = data;
    });

let lastScrollY = window.scrollY;
const navbar = document.querySelector('#navbar');

window.addEventListener('scroll', () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY <= 0 || currentScrollY < lastScrollY) {
        navbar.classList.remove('nav-hidden');
    } else {
        navbar.classList.add('nav-hidden');
    }

    lastScrollY = currentScrollY;
});

fetch("components/footer.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("footer").innerHTML = data;
    });