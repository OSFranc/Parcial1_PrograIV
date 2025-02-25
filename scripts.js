class header extends HTMLElement{
    constructor() {
        super()
    }
    //Aca escribimos lo que hara este elemento
    connectedCallback() { 
        this.innerHTML='<div id="headerUGB"> <img id="logoUGBimg" src="images/logoUGBclear.jpg"> <h1>Universidad Gerardo Barrios</h1> <ul id="listadoHeader"> <li><strong>Codigo de Estudiante:</strong> SMSS065523</li> <li><strong>Carrera:</strong> Ingenieria en Redes y Sistemas</li> </ul> </div>'

    }
    
}



window.customElements.define("custom-header", header);

let num=1

function Test(){
    console.log("Si Funciona")
}