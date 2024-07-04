function submitVote() {
    const form = document.getElementById('voteForm');
    const selectedCandidate = form.candidate.value;
    if (selectedCandidate) {
        alert(`Has votado por: ${selectedCandidate}`);
        // Aquí puedes agregar la lógica para enviar el voto a un servidor
    } else {
        alert('Por favor, selecciona un candidato antes de votar.');
    }
}
