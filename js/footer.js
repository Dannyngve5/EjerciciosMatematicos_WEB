document.addEventListener('DOMContentLoaded', function() {
    function loadFooter(){
        const footContainer = document.getElementById('footer-container');
        fetch("footer.html")
            .then(response => response.text())
            .then(data  => {
                footContainer.innerHTML = data;
            })
    }
    loadFooter();
});