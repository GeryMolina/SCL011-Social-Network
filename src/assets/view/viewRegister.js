
export const viewRegister=()=>{

    //creamos vista o pagina principal/
    const contPrincipal = document.getElementById("root");
    contPrincipal.innerHTML=`<div id="contInit" class="contInit">
                                <div id="contHeader" class="contHeader">
                                        <img class="logo" src="assets/img/logo.png"></a>
                                </div>
                                <div id="contBody" class="contBody2"> 
                                    <div class="body9">
                                        <h1>Registro de Usuario</h1>
                                    </div>
                                    <div class="body10">
                                        <p>Nombre</p>
                                        <input id="name" type="text">
                                        <p>Correo Electrónico</p>
                                        <input id="email" type="text">
                                        <p>Contraseña</p>
                                        <input id="password" type="password">
                                    </div>
                                    <div class="body11">
                                    <button id= "bntRegister" class="btnRegister">Ingresar</button>
                                    </div>
                                </div>
                            </div>    `    

   const register = document.getElementById("bntRegister");
   register.addEventListener('click', () => {
       contInit.innerHTML = " "
       
   })



}

