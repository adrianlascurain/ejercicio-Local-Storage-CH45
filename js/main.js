
// Obteniendo elementos HTML
const inputNombre = document.getElementById("inputNombre");
const botonGuardar = document.getElementById("botonGuardar");

// Obteniendo elementos de validaciones
const alertValidaciones = document.getElementById("alertValidaciones");
const alertValidacionesTexto = document.getElementById("alertValidacionesTexto");

botonGuardar.addEventListener("click", function(event){
    event.preventDefault()

    inputNombre.style.border = ""  
    alertValidaciones.style.display = "none";

    if(inputNombre.value !== ''){
        alertValidaciones.classList = "alert alert-success fade show p-1 m-2"  
        alertValidacionesTexto.innerHTML = `<span>El nombre: <strong>${inputNombre.value}</strong> ha sido guardado en el local storage</span>`;
        alertValidaciones.style.display = "block";
        localStorage.setItem("nombre", inputNombre.value)
    }else{
        alertValidaciones.classList = "alert alert-danger fade show p-1 m-2"  
        inputNombre.style.border = "solid red medium"
        alertValidaciones.style.display = "block";
        alertValidacionesTexto.innerHTML = "<span>El campo de <strong>nombre</strong> está vacío</span>"
    }
    inputNombre.value = "";
    inputNombre.focus()
    return
})