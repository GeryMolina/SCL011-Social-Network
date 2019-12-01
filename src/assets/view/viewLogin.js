import {login, authGoogle , authFacebook} from '../js/auth.js'
import {viewRegister} from './viewRegister.js'
import { viewWall } from './viewWall.js';


export const viewLogin = () => {
    
     const contPrincipal = document.getElementById("root");
     contPrincipal.innerHTML=`<div id="contInit" class="contInit">
                                <div id="contHeader" class="contHeader">
                                    <img class="logo" src="assets/img/logo.png"></a>
                                </div>
                                <div id="contBody" class="contBody1">
                                    <div class="body5">
                                    <h1>Inicia Sesión</h1>
                                    </div>
                                    <div class="body6">
                                        <p>Correo Electrónico</p>
                                        <input id="email2" type="text" ">
                                        <p>Contraseña</p>
                                        <input id="password2" type="password" >
                                    </div>
                                    <div class="body7">
                                            <button id= "bntLogin" class="btnLogin">Ingresar</button>
                                            <p id="register" class="register">Soy nuevo</p>
                                    </div>
                                    <div class="body8">
                                        <h2>Accede con</h2>
                                        <button id= "bntGoogle" class="btnGoogle">Google</button>
                                        <button id= "bntFb" class="btnFb">Facebook</button>
                                    </div>
                                </div>
                                <div id="contFooter" class="contFooter"></div>
                            </div>      `
     
  
   

    const register = document.getElementById("register");
    register.addEventListener('click', () => {
        viewRegister()
    })


    const btnLogin=document.getElementById("bntLogin");
    btnLogin.addEventListener("click",()=>{
        login();
        viewWall();
    })


    const btnGoogle = document.getElementById("bntGoogle");
    btnGoogle.addEventListener("click", () => {

        authGoogle();

    })
    const btnFacebook = document.getElementById("bntFb");
    btnFacebook.addEventListener("click", () => {

        authFacebook();

    })
    
}
