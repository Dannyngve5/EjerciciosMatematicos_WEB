// app.js
import { logarithm, powers, roots } from './mathOperations.js';

document.addEventListener('DOMContentLoaded', function() {
    
    let localAnswer;
    let record = 0;

    const operationsMap = {
        'potenciacion.html': () => {
            let { base, power, answer } = powers();            
            localAnswer = answer;
            updateDOMWithPower(base, power);
        },
        'radicacion.html': () => {
            let { base, root, answer } = roots();
            localAnswer = answer;
            updateDOMWithRoot(base, root);      
        },
        'logaritmo.html': () => {
            let { base, argument, log} = logarithm();
            localAnswer = log;
            updateDOMWithLog(base, argument);
        }
    };
        
    function nextExercise(){
        document.getElementById("user-answer").value = "";
        document.getElementById("next-button").classList.add('d-none');
        document.getElementById("submit-answer").classList.remove('d-none');
        feedback.textContent = "";        
        const pathname = window.location.pathname;
        const pageName = pathname.split('/').pop();        
        const operationFunction = operationsMap[pageName];
        if (operationFunction) {
            operationFunction(); 
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
            record += 1;
            document.getElementById("racha").textContent = `Racha: ${record}`;
        }else if(userAnswer != ""){
            feedback.textContent = "Incorrecto";
            feedback.className = "text-danger text-center";
            record = 0;
            document.getElementById("racha").textContent = `Racha: ${record}`;
        }
   }
    nextExercise();
    tooltipInit();
    document.getElementById("submit-answer").addEventListener('click', validateAnswer);
    document.getElementById("next-button").addEventListener('click', nextExercise);

     // Oyente de eventos para la tecla Enter en el campo de respuesta del usuario
     document.getElementById("user-answer").addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            if (!document.getElementById("submit-answer").classList.contains('d-none')) {
                validateAnswer();
            } else if (!document.getElementById("next-button").classList.contains('d-none')) {
                nextExercise();
            }
        }
    });
    
    
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

function updateDOMWithLog(base, argument){
    document.getElementById("math-operation-text").innerHTML = ` ¿Cúanto es el logaritmo en base ${base} de ${argument}?`;
    document.getElementById("math-operation").innerHTML = `Log<sub>${base}</sub> ${argument}`;
    document.getElementById("math-operation").classList.add("display-4");
}

function tooltipInit(){
    const tooltips = document.querySelectorAll('.tt');
    tooltips.forEach(t => {
        new bootstrap.Tooltip(t)
    })
}