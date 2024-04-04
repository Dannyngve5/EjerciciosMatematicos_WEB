document.addEventListener('DOMContentLoaded', function() {
    
    let nextButtonState = true;
    let realAnswer;
    let rachaPower = 0;
    let totalRoot = 0;

    function loadNavbar() {
        const navbarContainer = document.getElementById('navbar-container');
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarContainer.innerHTML = data;
                // Una vez cargado el navbar, puedes activar cualquier JavaScript necesario para Bootstrap o tus propios scripts
                // Esto es necesario porque el contenido se carga dinámicamente y los elementos no existían al cargar la página
                activateBootstrapComponents();
            });
    }

    function activateBootstrapComponents() {
        // Tu código para inicializar componentes de Bootstrap, si es necesario
    }
    loadNavbar();

    function powers(){
        const base = Math.floor(Math.random() * 11);
        let power;
        if (base <= 4){
            power = Math.floor(Math.random() * 6);
        }else{
            power = Math.floor(Math.random() * 5);
        }
        realAnswer = base ** power; 
        document.getElementById("math-operation-text").innerHTML = `¿Cuánto es ${base} elevado a la ${power}?`;
        document.getElementById("math-operation").innerHTML = `${base}<sup>${power}</sup>`;
        document.getElementById("math-operation").classList.add("display-4");
    }

    function roots(){
        const root = Math.floor(Math.random() * 2) + 2;
        let base;
        if (root == 2){
            base = Math.floor(Math.random() * 10) + 1;
        }else{
            base = Math.floor(Math.random() * 4) + 1;
        }
        base **= root;
        realAnswer = Math.round(Math.pow(base, 1 / root));
        console.log(realAnswer)
        let operationText;
        if (root === 2) {
            operationText = "cuadrada";
            document.getElementById("math-operation").innerHTML = `&radic;${base}`;
        } else if (root === 3) {
            operationText = "cúbica";
            document.getElementById("math-operation").innerHTML = `<sup>3</sup>&radic;${base}`;
        }
        document.getElementById("math-operation-text").innerHTML = `¿Cuánto es la raíz ${operationText} de ${base}?`;
        document.getElementById("math-operation").classList.add("display-4");
    }

    function validateAnswer(){
        if (nextButtonState) {
            const userAnswer = document.getElementById("user-answer").value;
            const feedback = document.getElementById("feedback");

            if(userAnswer.trim() == realAnswer){
                feedback.textContent = "Correcto";
                feedback.className = "text-success text-center";
                document.getElementById("next-button").classList.remove('d-none');
                nextButtonState = false;
            }else{
                feedback.textContent = "Incorrecto";
                feedback.className = "text-danger text-center";
            }
        }
        
    }

    function nextExercise(){
        document.getElementById("next-button").classList.add('d-none');
        nextButtonState = true;
        const pathname = window.location.pathname;
        if (pathname.includes('potenciacion.html')) {
            powers();
            rachaPower +=1;
            document.getElementById("racha").textContent = `Racha: ${rachaPower}`;
        } else if (pathname.includes('radicacion.html')) {
            roots();
            totalRoot +=1;
            document.getElementById("racha").textContent = `Completado: ${totalRoot} / 13`;
        }
    }

    

    const pathname = window.location.pathname;
    if (pathname.includes('potenciacion.html')) {
        powers();
    } else if (pathname.includes('radicacion.html')) {
        roots();
    }

    document.getElementById("submit-answer").addEventListener('click', validateAnswer);
    document.getElementById("next-button").addEventListener('click', nextExercise);
    
    
});
