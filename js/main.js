document.addEventListener('DOMContentLoaded', function () {

    const menuIcono = document.querySelector('.m-icono');
    const topPeli   = document.querySelector('.top_peli');

    // Solo actúa si los elementos existen en la página
    if (menuIcono && topPeli) {

        let menuAbierto = false;

        menuIcono.addEventListener('click', function () {
            menuAbierto = !menuAbierto;

            if (menuAbierto) {
                topPeli.style.width   = '200px';
                topPeli.style.opacity = '1';
            } else {
                topPeli.style.width   = '0';
                topPeli.style.opacity = '0';
            }
        });
    }

});
