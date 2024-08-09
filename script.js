document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const campoA = parseInt(document.getElementById('campoA').value);
    const campoB = parseInt(document.getElementById('campoB').value);
    
    if (campoB > campoA) {
        mostrarMensagem(true, campoA, campoB);
    } else {
        mostrarMensagem(false, campoA, campoB);
    }
});

function mostrarMensagem(valid, valorA, valorB) {
    const messageElement = document.getElementById('message');
    if (valid) {
        messageElement.textContent = `CERTO: ${valorB} é maior que ${valorA}.`;
        messageElement.className = 'message valid';
    } else {
        messageElement.textContent = `ERRO. : ${valorB} deve ser maior que ${valorA}.`;
        messageElement.className = 'message invalid';
    }
    messageElement.style.display = 'block';
}