class header extends HTMLElement{
    constructor() {
        super()
    }
    //Aca escribimos lo que hara este elemento
    connectedCallback() { 
        this.innerHTML='<div id="headerUGB"> <img id="logoUGBimg" src="images/logoUGBclear.jpg"> <h1>Universidad Gerardo Barrios</h1> <ul id="listadoHeader"> <li><strong>Codigo de Oscar Palacios:</strong> SMSS065523</li> <li><strong>Codigo de Manases Flores:</strong> SMSS040923</li> <li><strong>Carrera:</strong> Ingenieria en Redes y Sistemas</li> </ul> </div>'

    }
    
}

window.customElements.define("custom-header", header);

class footerUGB extends HTMLElement{
    constructor(){
        super()
    }
    connectedCallback() {
        this.innerHTML='<div id="footerUGB" onclick="Test()"> <ul> <li>Oscar Rene Palacios Franco</li> <li>Gerson Manases Flores Quinteros</li> <li>Examen Parcial - Primer Computo</li> </ul> </div>'
    }
}

window.customElements.define("custom-footer", footerUGB);

function ClicImagen(opcion){
    textoAbdomen = document.getElementById("txtSintomaDolorAbdominal")
    textoVomitos = document.getElementById("txtSintomaVomitos")
    textoSangrado = document.getElementById("txtSintomaSangrado")
    textoCansancio = document.getElementById("txtSintomaCansancio")

    switch(opcion){
        case "abdomen": 
        textoAbdomen.innerText=txtDolorAbdomen
        break;
    
        case "vomito":
            textoVomitos.innerText=txtVomitos
        break;

        case "sangrado":
            textoSangrado.innerText=txtSangrado
        break;

        case "cansancio":
            textoCansancio.innerText= txtCansacion
        break;
    }
}

let txtDolorAbdomen = "Este dolor no es solo una molestia leve, sino una sensación aguda y persistente que puede ser diffcil de soportar. Puede ser un indicativo de que la enfermedad está afectando órganos internos."
let txtVomitos = "Si experimentas vómitos repetidos, esto puede ser una señal de que tu cuerpo está teniendo dificultades para manejar la infección. Vómitos que ocurren tres o más veces en un período de 24 horas deben ser tomados en serio."
let txtSangrado = "Este síntoma puede manifestarse de varias formas, incluyendo sangrado de las encías, nariz, o incluso en el vómito y las heces. La aparición de sangre en cualquiera de estas áreas es una señal clara de que el dengue está causando daño significativo a los vasos sanguíneos."
let txtCansacion = "Sentirse extremadamente cansado o inquieto no es solo fatiga común. Puede ser una señal de que el cuerpo está luchando intensamente contra la infección y puede indicar problemas en el sistema circulatorio."