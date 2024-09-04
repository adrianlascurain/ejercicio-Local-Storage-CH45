const texto = document.getElementById("texto")
const eliminarNombreBtn = document.getElementById("eliminarNombre")
const mensaje = document.getElementById("mensaje");

window.addEventListener("load", function(event){
    let element;

    if(this.localStorage.getItem("nombre") !== null){
        element = `<h1>Hola ${this.localStorage.getItem("nombre")} bienvenido/a de de nuevo</h1>`;
        eliminarNombreBtn.disabled = false; 
    }else{
        element = "<h1>Por favor ve al index e ingresa tu nombre</h1>";
        eliminarNombreBtn.disabled = true; 
    }

    mensaje.innerHTML = element;
    return
})

eliminarNombreBtn.addEventListener("click", function(event){
    event.preventDefault();

    localStorage.removeItem("nombre");
    eliminarNombreBtn.disabled = true; 
    mensaje.innerHTML = "<h1>Por favor ve al index e ingresa tu nombre</h1>";
    return
})