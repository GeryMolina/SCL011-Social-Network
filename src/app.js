
import { firebaseInit } from './assets/js/firebase.js';
import { viewInit} from './assets/view/viewInit.js'
//import { initRouter } from './route.js';
import { observador} from './assets/js/auth.js';
const start = () => {
        //para iniciar base de datos firebase
        firebaseInit();
        viewInit();
        //la primera pantalla que abre 
        // initRouter();
        observador();

    }
    // aquí le decimos que cada vez que la pagina cargue de realizar la funcion init
window.addEventListener('load', start);
