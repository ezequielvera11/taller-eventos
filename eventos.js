//Creamos el DOM para que primero cargue el documento.
//Agregamos una constante que llame al div y otra al boton.
//Creamos un evento que cuando clickeamos el div despliegue un alert
//Creamos un evento que cuando clickeamos el boton detiene el evento del div y despliegue un alert.

document.addEventListener("DOMContentLoaded", function(){
    const div = document.querySelector("div");
    const boton = document.querySelector("button");

    div.addEventListener("click", () => {alert("Hola! Soy el div")});

    boton.addEventListener("click", (event) => {
        event.stopPropagation()
        alert("Hola!")
    });


});
