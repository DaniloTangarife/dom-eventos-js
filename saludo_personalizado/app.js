const form = document.querySelector("#saludo-form");
const nombreInput = document.querySelector("#nombre-input");
const resultado = document.querySelector("#resultado-saludo");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const nombre = nombreInput.value.trim();

    resultado.classList.remove("resultado--saludo", "resultado--aviso");

    if (!nombre) {
        resultado.textContent = "Por favor, escribe un nombre antes de saludar.";
        resultado.classList.add("resultado--aviso");
        nombreInput.focus();
        return;
    }

    resultado.textContent = `¡Hola, ${nombre}! Bienvenido.`;
    resultado.classList.add("resultado--saludo");
    nombreInput.value = "";
    nombreInput.focus();
});