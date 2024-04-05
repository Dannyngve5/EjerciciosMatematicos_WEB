import { powers, roots } from './mathOperations.js';

document.addEventListener('DOMContentLoaded', function() {
    
    let localAnswer;
    let rachaPower = 0;
        
    function nextExercise(){
        document.getElementById("user-answer").value = "";
        document.getElementById("next-button").classList.add('d-none');
        document.getElementById("submit-answer").classList.remove('d-none');
        
        const pathname = window.location.pathname;
        feedback.textContent = "";
        if (pathname.includes('potenciacion.html')) {
            let { base, power, answer } = powers();            
            localAnswer = answer;
            updateDOMWithPower(base, power);
        } else if (pathname.includes('radicacion.html')) {
            let { base, root, answer } = roots();
            localAnswer = answer;
            updateDOMWithRoot(base, root);      
        }
    }    

    function validateAnswer(){        
        const userAnswer = document.getElementById("user-answer").value;
        const feedback = document.getElementById("feedback");

        if(userAnswer.trim() == localAnswer){
            feedback.textContent = "Correcto";
            feedback.className = "text-success text-center";
            document.getElementById("next-button").classList.remove('d-none');
            document.getElementById("submit-answer").classList.add('d-none');
            rachaPower += 1;
            document.getElementById("racha").textContent = `Racha: ${rachaPower}`;
        }else{
            feedback.textContent = "Incorrecto";
            feedback.className = "text-danger text-center";
        }
   }
    nextExercise();
    document.getElementById("submit-answer").addEventListener('click', validateAnswer);
    document.getElementById("next-button").addEventListener('click', nextExercise);
    
    
});

function updateDOMWithPower( base, power) {
    document.getElementById("math-operation-text").innerHTML = `¿Cuánto es ${base} elevado a la ${power}?`;
    document.getElementById("math-operation").innerHTML = `${base}<sup>${power}</sup>`;
    document.getElementById("math-operation").classList.add("display-4");
}

function updateDOMWithRoot( base, root) {
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