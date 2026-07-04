// Modo oscuro y modo claro
console.log("JavaScript cargado"); 

function cambiarModo() {
    document.body.classList.toggle("dark-mode");

    let boton = document.getElementById("btnModo");

    if (document.body.classList.contains("dark-mode")) {
        boton.innerHTML = "☀️ Modo claro";
    } else {
        boton.innerHTML = "🌙 Modo oscuro";
    } 
}

// Formulario 

function enviarFormulario() {

    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;
    let mensaje = document.getElementById("mensaje").value;

    console.log("=== FORMULARIO ENVIADO ===");
    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Mensaje:", mensaje);

    let resultado = document.getElementById("resultado");

    if (nombre === "" || correo === "" || mensaje === "") {
        resultado.style.color = "red";
        resultado.innerHTML = "❌ Completa todos los campos";
        return false; // Evita recargar la página
    }

    resultado.style.color = "green";
    resultado.innerHTML = "✅ Enviado correctamente";

    return false; // Evita que el formulario se envíe
}