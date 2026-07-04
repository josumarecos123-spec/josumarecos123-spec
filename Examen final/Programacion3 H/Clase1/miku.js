function verificar(){

    let opcion = document.getElementById("waifu").value;
    let resultado = document.getElementById("resultado");

    if(opcion == ""){

        resultado.innerHTML = "⚠️ Selecciona una opción.";

    }

    else if(opcion == "miku"){

        resultado.innerHTML = "✅ Respuesta correcta. Miku es la mejor waifu. 💙";

    }

    else{

        resultado.innerHTML = "❌ Respuesta incorrecta.";

    }

}