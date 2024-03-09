//funcion para validar que si se este respetando la advertencia
function validarTexto(texto) {
    var texto = document.getElementById('texto-usuario').value;
    // Expresión regular que valida que el texto contenga solo letras minúsculas y sin acentos
    var regex = /^[a-z]+$/;

    // Comprobar si el texto cumple con la expresión regular
    if (!regex.test(texto)) {
        // El texto no es válido
        alert("El texto debe contener solo letras minúsculas y sin acentos.");
        return false;
    } else {
        return true; // El texto es válido
    }
}
//funcion para generar la encriptacion
function encriptar() {
    var texto = document.getElementById('texto-usuario').value;
    var texto_Encriptado = '';
    var copiar = document.getElementById('copiar')
    validarTexto(texto);
    // Verificar si el texto está vacío
    if (texto.trim() === '') {
        // Ocultar el textarea desencriptado
        var textareaDesencriptado = document.getElementById("texto-desencriptado");
        textareaDesencriptado.style.display = 'none';
        copiar.style.display = 'none'; //desaparece el boton
        return;
    }

    for (var i = 0; i < texto.length; i++) {
        var caracter = texto[i];

        switch (caracter) {
            case 'a':
                texto_Encriptado += 'ai';
                break;
            case 'e':
                texto_Encriptado += 'enter';
                break;
            case 'i':
                texto_Encriptado += 'imes';
                break;
            case 'o':
                texto_Encriptado += 'ober';
                break;
            case 'u':
                texto_Encriptado += 'ufat';
                break;
            default:
                texto_Encriptado += caracter;
        }
    }

    // Mostrar el texto encriptado en el textarea desencriptado
    var textareaDesencriptado = document.getElementById("texto-desencriptado");
    textareaDesencriptado.value = texto_Encriptado;
    
    // Mostrar u ocultar el textarea desencriptado según el texto encriptado
    if (texto_Encriptado.trim() === '') {
        textareaDesencriptado.style.opacity = '0'; // Hacer que el texto desaparezca suavemente
        setTimeout(function() {
            textareaDesencriptado.style.display = 'none';
        }, 500); // Esperar a que termine la transición antes de ocultar el textarea
    } else {
        textareaDesencriptado.style.display = 'inline-block';
        textareaDesencriptado.style.opacity = '1'; // Hacer que el texto aparezca suavemente
        copiar.style.display = 'block'; //aparece el boton copiar
    }
}
//funcion para generar la desencriptacion
function desencriptar() {
    var texto = document.getElementById('texto-usuario').value;
    var texto_Desencriptado = texto;
    var copiar = document.getElementById('copiar')
    validarTexto(texto);
    // Verificar si el texto está vacío
    if (texto.trim() === '') {
        // Ocultar el textarea desencriptado
        var textareaDesencriptado = document.getElementById("texto-desencriptado");
        textareaDesencriptado.style.display = 'none';
        copiar.style.display = 'none'; //desaparece el boton
        return;
    }

    // Reemplazar patrones de subcadenas en el texto encriptado
    texto_Desencriptado = texto_Desencriptado.replace(/ai/g, 'a');
    texto_Desencriptado = texto_Desencriptado.replace(/enter/g, 'e');
    texto_Desencriptado = texto_Desencriptado.replace(/imes/g, 'i');
    texto_Desencriptado = texto_Desencriptado.replace(/ober/g, 'o');
    texto_Desencriptado = texto_Desencriptado.replace(/ufat/g, 'u');

    // Mostrar el texto desencriptado en el textarea 
    var textareaDesencriptado = document.getElementById("texto-desencriptado");
    textareaDesencriptado.value = texto_Desencriptado;
    
    // Mostrar u ocultar el textarea desencriptado según el texto encriptado
    if (texto_Desencriptado.trim() === '') {
        textareaDesencriptado.style.opacity = '0'; // Hacer que el texto desaparezca suavemente
        setTimeout(function() {
            textareaDesencriptado.style.display = 'none';
            copiar.style.display = 'none'; //desaparece el boton copiar
        }, 500); // Esperar a que termine la transición antes de ocultar el textarea
    } else {
        textareaDesencriptado.style.display = 'inline-block';
        textareaDesencriptado.style.opacity = '1'; // Hacer que el texto aparezca suavemente
        copiar.style.display = 'block';

    }
}
//Funcion para generar el copy
function copiar(){
    var texto_copiado = document.getElementById('texto-desencriptado').value;

    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(texto_copiado);
        return;
    }

    // Utilizar la API del portapapeles para copiar el texto
    navigator.clipboard.writeText(texto_copiado).then(function() {
        alert('¡Texto copiado al portapapeles!');
    }, function(err) {
        console.error('Error al copiar el texto al portapapeles: ', err);
    });
}
