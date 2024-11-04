
function checkSolution() {
    const feedback = document.getElementById('feedback');
    feedback.textContent = "¡Correcto! 'x' debe ser menor que 10.";
}

document.addEventListener('DOMContentLoaded', function() {
    const term = document.getElementById('x');
    term.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text', event.target.id);
    });
});
