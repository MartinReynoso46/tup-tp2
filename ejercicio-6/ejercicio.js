document.getElementById('registroForm').addEventListener('submit', function(event) {
    // Evita que el formulario se envíe de forma predeterminada (recargar la página)
    event.preventDefault();

    // Obtenemos los elementos del DOM
    const nombreInput = document.getElementById('nombre');
    const apellidoInput = document.getElementById('apellido');
    const edadInput = document.getElementById('edad');
    const alturaInput = document.getElementById('altura');
    const correoInput = document.getElementById('correo');
    const mensajeValidacionDiv = document.getElementById('mensajeValidacion');

    // Limpiamos mensajes y estilos anteriores
    mensajeValidacionDiv.classList.remove('success', 'error', 'show');
    mensajeValidacionDiv.textContent = ''; // Limpiar texto

    let errores = []; // Array para almacenar los mensajes de error

    // 1. Validación de Nombre
    const nombre = nombreInput.value.trim(); // .trim() elimina espacios en blanco al inicio y final
    if (nombre === '') {
        errores.push('El nombre no puede estar vacío.');
    } else if (nombre.length > 50) {
        errores.push('El nombre no puede tener más de 50 caracteres.');
    }

    // 2. Validación de Apellido
    const apellido = apellidoInput.value.trim();
    if (apellido === '') {
        errores.push('El apellido no puede estar vacío.');
    } else if (apellido.length > 50) {
        errores.push('El apellido no puede tener más de 50 caracteres.');
    }

    // 3. Validación de Edad
    const edad = parseInt(edadInput.value); // parseInt para obtener un número entero
    if (isNaN(edad)) {
        errores.push('La edad debe ser un número.');
    } else if (edad < 0) {
        errores.push('La edad no puede ser negativa.');
    } else if (edad < 18) { // Considerando 18 como la mayoría de edad
        errores.push('Debes ser mayor de edad para registrarte (mínimo 18 años).');
    }

    // 4. Validación de Altura
    const altura = parseFloat(alturaInput.value); // parseFloat para permitir decimales (aunque se usa step="1")
    if (isNaN(altura)) {
        errores.push('La altura debe ser un número.');
    } else if (altura < 0) {
        errores.push('La altura no puede ser negativa.');
    } else if (altura > 230) {
        errores.push('La altura no puede ser mayor a 230 cm.');
    }

    // 5. Validación de Correo Electrónico
    const correo = correoInput.value.trim();
    if (correo === '') {
        errores.push('El correo electrónico no puede estar vacío.');
    } else if (!correo.includes('@')) { // Verifica si incluye el '@'
        errores.push('El correo electrónico debe incluir el símbolo "@".');
    }

    // Mostrar el resultado de las validaciones
    if (errores.length > 0) {
        // Si hay errores, mostramos todos los mensajes en rojo
        mensajeValidacionDiv.classList.add('error', 'show');
        mensajeValidacionDiv.innerHTML = '<ul>' + errores.map(error => `<li>${error}</li>`).join('') + '</ul>';
    } else {
        // Si no hay errores, mostramos un mensaje de éxito en verde
        mensajeValidacionDiv.classList.add('success', 'show');
        mensajeValidacionDiv.textContent = '¡Todos los datos son válidos! Formulario enviado correctamente.';
        // Aquí podrías agregar la lógica para enviar los datos a un servidor, etc.
        // Por ejemplo: alert('Datos enviados: ' + nombre + ' ' + apellido);
        
        // Opcional: Limpiar el formulario después de un envío exitoso
        document.getElementById('registroForm').reset();
    }
});