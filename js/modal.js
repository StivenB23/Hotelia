// Navbar
(function(){
    const list = document.querySelector('.navBar');
    const menu = document.querySelector('.menu__hamburguer');

    menu.addEventListener('click',()=> list.classList.toggle('navbar--show'));
})();

// instanciate new modal
let modal = new tingle.modal({
    footer: true,
    stickyFooter: false,
    closeMethods: ['overlay', 'button', 'escape'],
    closeLabel: "Close",
    cssClass: ['custom-class-1', 'custom-class-2'],
    onOpen: function() {
        console.log('modal open');
    },
    onClose: function() {
        console.log('modal closed');
    },
    beforeClose: function() {
        // here's goes some logic
        // e.g. save content before closing the modal
        return true; // close the modal
        return false; // nothing happens
    }
});
// set content
modal.setContent('<h1>Terminos y condiciones</h1>\n <p>Estos terminos del servicio reflejan la forma de trabajar de Google como empresa, las leyes por las que nos regimos y determinados aspectos que siempre hemos creído que son ciertos. Por ello, estos Términos del Servicio ayudan a definir la relación que tiene Google contigo cuando interactúas con nuestros servicios. Por ejemplo, estos términos incluyen las siguientes secciones: <br> Que puedes esperar de nosotros, donde se describe cómo proporcionamos y desarrollamos nuestros servicios. Lo que esperamos de ti, donde se establecen ciertas reglas para utilizar nuestros servicios.</p>');

// add a button
modal.addFooterBtn('Aceptar', 'tingle-btn tingle-btn--primary', function() {
    // here goes some logic
    modal.close();
});