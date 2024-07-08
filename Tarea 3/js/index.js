
const images = document.querySelectorAll('.image-slider img');
let currentImageIndex = 0;

function showNextImage() {
    images[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % images.length;
    images[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 3000); 


document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();
        if (validateForm()) {
            Swal.fire({
                title: 'Bienvenida a esta asombrosa experiencia',
                text: 'Su registro ha sido exitoso',
                icon: 'success',
                confirmButtonText: 'Volver'
            });
        }
    });

    function validateForm() {
        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const correo = document.getElementById('correo').value;
        const telefono = document.getElementById('telefono').value;
        const nacionalidad = document.getElementById('nacionalidad').value;
        const residencia = document.getElementById('residencia').value;
        const fecha = document.getElementById('fecha').value;
        const espacios = document.getElementById('espacios').value;

        if (!nombre || !apellido || !correo || !telefono || !nacionalidad || !residencia || !fecha || !espacios) {
            Swal.fire('Error', 'Por favor, completa todos los campos.', 'error');
            return false;
        }

        if (!/^[a-zA-Z]+$/.test(nombre)) {
            Swal.fire('Error', 'El nombre solo puede contener letras.', 'error');
            return false;
        }

        if (!/^[a-zA-Z]+$/.test(apellido)) {
            Swal.fire('Error', 'El apellido solo puede contener letras.', 'error');
            return false;
        }

        if (!/^\d{8,10}$/.test(telefono)) {
            Swal.fire('Error', 'El teléfono debe contener entre 8 y 10 dígitos.', 'error');
            return false;
        }

        return true;
    }
});


function scrollToForm() {
    document.getElementById('registration-form').scrollIntoView({ behavior: 'smooth' });
}
