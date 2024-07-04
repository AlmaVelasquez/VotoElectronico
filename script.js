document.addEventListener('DOMContentLoaded', (event) => {
    // Verificar si el usuario ya ha votado
    if (localStorage.getItem('hasVoted') === 'true') {
           // Mostrar un mensaje de que ya ha votado
        alert('Ya has votado. Gracias por tu participación.');
    }
});

function submitVote() {
    // Verificar si el usuario ya ha votado
    if (localStorage.getItem('hasVoted') === 'true') {
        alert('Ya has votado. Solo se permite votar una vez.');
        return;
    }

    const form = document.getElementById('voteForm');
    const selectedCandidate = form.candidate.value;
    if (selectedCandidate) {
        // Aquí agregarías la lógica para registrar el voto, por ejemplo, enviarlo al servidor
        // Como ejemplo, solo mostraremos un mensaje de alerta
        alert(`Has votado por: ${selectedCandidate}`);

        // Marcar que el usuario ha votado
        localStorage.setItem('hasVoted', 'true');

        // Ocultar el formulario de votación después del voto
        form.style.display = 'none';

        // Alternativamente, podrías deshabilitar individualmente los botones aquí si prefieres
        // Pero en este caso, estamos ocultando todo el formulario después del voto
    } else {
        alert('Por favor, selecciona un candidato antes de votar.');
    }
}
