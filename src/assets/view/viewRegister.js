
export const viewRegister=()=>{

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
   contBody.innerHTML += ` <div class="body10">
                               <h1>Inicio Sesión</h1>
                           </div>
                           <div class="body11">
                               <p>Nombre</p>
                               <input id="name" type="text">
                               <p>Correo Electrónico</p>
                               <input id="email" type="text">
                               <p>Contraseña</p>
                               <input id="password" type="password">
                           </div>
                           
                           <div class="body12">
                                   <button id= "bntRegister">Ingresar</button>
                           </div>
                           `


   //creamos container footer
   const contFooter = document.createElement("div");
   contFooter.className = "contFooter";
   contFooter.setAttribute("id", "contFooter");
   contInit.appendChild(contFooter);
   

   const register = document.getElementById("bntRegister");
   register.addEventListener('click', () => {
       contInit.innerHTML = " "
       
   })



}

