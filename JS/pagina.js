'use strict'

function mostrarAlerta(constante) {

    let boton = document.getElementById('btn-formContact');

    constante.innerHTML = "";
    constante.innerHTML = `
        <p>Por favor llena todos los campos</p>
    `;

    boton.style.display = "none";
    constante.style.display = "flex";
    setTimeout(function() {
        constante.style.display = "none";
        boton.style.display = "flex";
    }, 4000);

}

function validar(variable) {
    if (variable.value.length > 0) {

        variable.value = variable.value.trim();
        return variable.value;

    } else {

        let aviso = document.getElementById('aviso');

        variable.style.border = "2px solid rgb(250, 22, 22)";
        setTimeout(function() {
            variable.style.border = "2px solid rgb(2, 167, 131)";
        }, 4000);
        mostrarAlerta(aviso);
        return false;

    }
}

window.addEventListener('load', function() {

    console.log("Pagina cargada");

    let form = document.getElementById('contact-form');

    form.addEventListener('submit', function(e){
        e.preventDefault();
        console.log('Boton enviar presionado');

        let nom = document.getElementById('Nombre');
        let email = document.getElementById('Correo');
        let tel = document.getElementById('Tel');
        let asunto = document.getElementById('Asunto');
        let cuerpo = document.getElementById('Mensaje');

        if(validar(nom)== false || validar(email)== false || validar(tel)== false || validar(asunto)== false || validar(cuerpo)== false){

            console.log('Faltan datos por llenar, formulario no enviado!');
            return false;

        } else{

            let contactForm = new FormData(form);
            console.log(Array.from(contactForm.entries()));

            fetch('PHP/pagina.php', {
                method: 'POST',
                body: contactForm
            })
            .then(respuesta => respuesta.json())
            .then(datos => {

            })

            form.reset();

        }
        
    })
});