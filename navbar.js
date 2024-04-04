// navbar.js
export function loadNavbar() {
    const navbarContainer = document.getElementById('navbar-container');
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            navbarContainer.innerHTML = data;
            // Aquí puedes activar cualquier JavaScript necesario para Bootstrap
        });
}