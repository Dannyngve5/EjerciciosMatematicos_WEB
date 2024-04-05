// Definición de módulos para operaciones matemáticas
import { powers, roots } from './mathOperations.js';

// Objeto para mapear las acciones específicas de cada página
const pageActions = {
    '/potenciacion.html': () => {
        powers(updateMathOperationDisplay);
    },
    '/radicacion.html': () => {
        roots(updateMathOperationDisplay);
    }
    // Puedes añadir más páginas y sus acciones específicas aquí
};

// Función de actualización para mostrar operaciones matemáticas
function updateMathOperationDisplay(base, power, realAnswer) {
    document.addEventListener('DOMContentLoaded', function() {
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Detecta la página actual y ejecuta la acción correspondiente
    const currentPage = window.location.pathname.split("/").pop(); // Obtiene solo el nombre del archivo
    if (pageActions[currentPage]) {
        pageActions[currentPage]();
    }

    // Inicializa los listeners para los botones que son comunes a varias páginas
    setupCommonEventListeners();
});

function setupCommonEventListeners() {
    // Configura aquí los listeners comunes, como validateAnswer y nextExercise
}
