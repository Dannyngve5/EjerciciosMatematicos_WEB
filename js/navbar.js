document.addEventListener('DOMContentLoaded', function() {
    function loadNavbar() {
        const navbarContainer = document.getElementById('navbar-container');
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarContainer.innerHTML = data;
                
            });
    }
    loadNavbar();
});
