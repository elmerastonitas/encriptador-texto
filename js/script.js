function encrypt() {

    // obtiene el valor del texto en el campo de texto
    var text = document.getElementById("text").value;

    var result = "";

    // Verifica si el texto contiene caracteres diacríticos o está en mayúsculas
    if (/[^\u0000-\u007f]/.test(text) || text != text.toLowerCase()) {
        alert("Solo se permiten letras minúsculas sin acentos ni caracteres especiales");
        return;
    }

    // si el modo es encriptar, se recorre cada caracter del texto

    for (var i = 0; i < text.length; i++) {

        // se reemplaza cada caracter con su correspondiente valor encriptado
        switch (text[i]) {
            case 'e':
                result += 'enter';
                break;
            case 'i':
                result += 'imes';
                break;
            case 'a':
                result += 'ai';
                break;
            case 'o':
                result += 'ober';
                break;
            case 'u':
                result += 'ufat';
                break;

            // si no es una de las letras especificadas, se deja el caracter tal cual
            default:
                result += text[i];
        }
    }

    // se muestra el resultado en el campo de resultado
    document.getElementById("result").value = result;

}

function decrypt() {

    // obtiene el valor del texto en el campo de texto y lo pone en minúsculas
    var text = document.getElementById("text").value.toLowerCase();

    // obtiene el valor del modo de conversión seleccionado (encriptar o desencriptar)
    //var mode = document.querySelector('input[name="mode"]:checked').value;
    var result = "";

    for (var i = 0; i < text.length; i++) {

        // se comprueba si cada grupo de caracteres corresponde a una letra encriptada y se reemplaza con su correspondiente valor desencriptado
        if (text.substring(i, i + 5) == "enter") {
            result += 'e';
            i += 4;
        } else if (text.substring(i, i + 4) == "imes") {
            result += 'i';
            i += 3;
        } else if (text.substring(i, i + 2) == "ai") {
            result += 'a';
            i += 1;
        } else if (text.substring(i, i + 4) == "ober") {
            result += 'o';
            i += 3;
        } else if (text.substring(i, i + 4) == "ufat") {
            result += 'u';
            i += 3;
        }
        // si no es una de las letras encriptadas, se deja el caracter tal cual
        else {
            result += text[i];
        }
    }

    // se muestra el resultado en el campo de resultado
    document.getElementById("result").value = result;

}

function copy() {

    // se obtiene el valor del campo de resultado y se copia al portapapeles
    var result = document.getElementById("result").value;
    navigator.clipboard.writeText(result);
}

function paste(textId, buttonId) {

    /// se obtiene el elemento con el id especificado en el parametro buttonId
    const pasteButton = document.getElementById(buttonId);
    // se obtiene el elemento con el id especificado en el parametro textId
    const text = document.getElementById(textId);

    // se agrega un evento al botón pasteButton para escuchar un click
    pasteButton.addEventListener("click", function () {
        // se utiliza la API del portapapeles para obtener el texto del portapapeles
        navigator.clipboard.readText()
            // si se obtiene el texto correctamente se asigna al valor del elemento text
            .then(textValue => text.value = textValue)
            // si hay un error en la lectura del portapapeles se muestra un mensaje de error en la consola
            .catch(err => console.error("Error al pegar el texto: ", err));
    });
}


function pasteText() {
    paste('text', 'paste-button');
}


function reset() {
    // se limpian los campos de texto
    document.getElementById("text").value = "";
    document.getElementById("result").value = "";
}

// Obtiene el elemento del textarea mediante su ID
var textarea = document.getElementById("text");
// Obtiene el elemento del div1 mediante su ID
var div1 = document.getElementById("div1");
// Obtiene el elemento del div2 mediante su ID
var div2 = document.getElementById("div2");
// Agrega un evento "input" al textarea para detectar cambios en su contenido
textarea.addEventListener("input", function () {
    // Comprueba si la longitud del valor del textarea es igual a 0
    if (textarea.value.length === 0) {
        // Si es así, muestra div1 y oculta div2
        div1.style.display = "block";
        div2.style.display = "none";
    } else {
        // Si no, oculta div1 y muestra div2
        div1.style.display = "none";
        div2.style.display = "block";
    }
});

// Agrega un evento "onload" a la ventana para detectar cuando la página se carga completamente
window.onload = function () {
    // Comprueba si la longitud del valor del textarea es igual a 0
    if (textarea.value.length === 0) {
        // Si es así, muestra div1 y oculta div2
        div1.style.display = "block";
        div2.style.display = "none";
    } else {
        // Si no, oculta div1 y muestra div2
        div1.style.display = "none";
        div2.style.display = "block";
    }
};