import { powers, roots } from './mathOperations.js';

document.addEventListener('DOMContentLoaded', function() {
    
    let nextButtonState = true;
    let realAnswer;
    let rachaPower = 0;
    let totalRoot = 0;    
     
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
        feedback.textContent = "";
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
