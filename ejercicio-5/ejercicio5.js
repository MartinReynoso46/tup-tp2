document.getElementById('calcularBtn').addEventListener('click', function() {
    const medidaA = parseFloat(document.getElementById('medidaA').value);
    const medidaC = parseFloat(document.getElementById('medidaC').value);
    const medidaB = parseFloat(document.getElementById('medidaB').value);

    // Validación de entradas: deben ser números válidos y positivos
    if (isNaN(medidaA) || isNaN(medidaC) || isNaN(medidaB) ||
        medidaA <= 0 || medidaC <= 0 || medidaB <= 0) {
        alert('Por favor, ingresa valores numéricos positivos para todas las medidas (A, C y B).');
        return;
    }

    // Calcular el área de un trapecio: Area = ((Base1 + Base2) / 2) * Altura
    // En este caso, Base1 = A, Base2 = C, y Altura = B
    const area = ((medidaA + medidaC) / 2) * medidaB;

    // Mostrar el resultado en una alerta, con dos decimales
    alert(`El área de tu terreno (Forma A) es: ${area.toFixed(2)} metros cuadrados.`);
});