document.addEventListener('DOMContentLoaded', (event) => {
    // Verificar si el usuario ya ha votado
    if (localStorage.getItem('hasVoted') === 'true') {
        // Mostrar un mensaje de que ya ha votado
        alert('Ya has votado. Gracias por tu participación.');
        // Deshabilitar los botones de votación
        disableVotingButtons();
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

        // Deshabilitar los botones de votación después del voto
        disableVotingButtons();
    } else {
        alert('Por favor, selecciona un candidato antes de votar.');
    }
}

function disableVotingButtons() {
    // Obtener todos los radio buttons dentro del formulario de votación
    const radioButtons = document.querySelectorAll('#voteForm input[type="radio"]');
    // Deshabilitar cada radio button
    radioButtons.forEach(radio => {
        radio.disabled = true;
    });

    // Deshabilitar el botón de votar
    document.querySelector('#voteForm button').disabled = true;
}
