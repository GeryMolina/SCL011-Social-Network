import {viewLogin} from './viewLogin.js'

export const viewInit = () => {
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
    contBody.innerHTML += ` <div class="body1">
                                <h2>Te conectamos con miles de emprendedores de todo el país.</h2>
                            </div>
                            <div class="body2" >
                                <img src="/assets/img/001-tienda.png" id="store">
                                <h4>Soy tienda</h4>
                            </div>
                            <div class="body3">
                                <img src="/assets/img/002-usuario.png" id="user">
                                <h4>Soy cliente</h4>
                            </div>
                            <div class="body4">
                            <h2>Comprar en pequeños comercios te hace grande</h2>
                            </div>`


    //creamos container footer
    const contFooter = document.createElement("div");
    contFooter.className = "contFooter";
    contFooter.setAttribute("id", "contFooter");
    contInit.appendChild(contFooter);
    

    const store = document.getElementById("store");
    store.addEventListener('click', () => {
        contInit.innerHTML = " "
        viewLogin();
    })


    const user=document.getElementById("user");
    user.addEventListener("click",()=>{
        contInit.innerHTML = " "
        viewLogin();
    })


  
}
