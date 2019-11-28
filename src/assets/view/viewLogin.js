import {login, authGoogle , authFacebook} from '../js/auth.js'
import {viewRegister} from './viewRegister.js'


export const viewLogin = () => {
     //creamos vista o pagina principal/
     const contPrincipal = document.getElementById("root");
     //creamos container principal
     
     const contInit = document.createElement("div");
     contInit.className = "contInit";
     contInit.setAttribute("id", "contInit");
     contPrincipal.appendChild(contInit);
 
     //creamos container header
     const contHeader = document.createElement("div");
     contHeader.className = "contHeader";
     contHeader.setAttribute("id", "contHeader");
     contInit.appendChild(contHeader);
     contHeader.innerHTML += `
                             <img class="logo" src="assets/img/logo.png"></a>
                              `

    //creamos container body
    const contBody = document.createElement("div");
    contBody.className = "contBody";
    contHeader.setAttribute("id", "contBody");
    contInit.appendChild(contBody);
    contBody.innerHTML += ` <div class="body5">
                                <h1>Inicio Sesión</h1>
                            </div>
                            <div class="body6">
                                <p>Correo Electrónico</p>
                                <input id="email2" type="text" placeholder="Correo">
                            </div>
                            <div class="body7">
                                    <p>Contraseña</p>
                                    <input id="password2" type="password" placeholder="Contraseña">
                            </div>
                            <div class="body8">
                                    <button id= "bntLogin">Ingresar</button>
                            </div>
                            <div class="body9">
                                <p id="register">Soy nuevo</p>
                            </div>
                            <div class="body9">
                            <h4>Accede con</h4>
                            <button id= "bntGoogle">Google</button>
                            <button id= "bntFb">Facebook</button>
                            </div>`


    //creamos container footer
    const contFooter = document.createElement("div");
    contFooter.className = "contFooter";
    contFooter.setAttribute("id", "contFooter");
    contInit.appendChild(contFooter);
   

    const register = document.getElementById("register");
    register.addEventListener('click', () => {
        contInit.innerHTML = " "
        viewRegister()
    })


    const btnLogin=document.getElementById("bntLogin");
    btnLogin.addEventListener("click",()=>{
        login();
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
