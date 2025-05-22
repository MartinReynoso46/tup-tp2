document.getElementById('calcularBtn').addEventListener('click', function() {
    const peso = parseFloat(document.getElementById('peso').value);
    const estatura = parseFloat(document.getElementById('estatura').value);

    if (isNaN(peso) || isNaN(estatura) || peso <= 0 || estatura <= 0) {
        alert('Por favor, ingresa tu peso y estatura con números válidos y positivos.');
        return;
    }

    const imc = peso / (estatura * estatura);

    alert(`Tu IMC es: ${imc.toFixed(2)}.`);
});