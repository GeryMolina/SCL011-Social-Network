import {viewLogin} from './viewLogin.js'

export const viewInit = () => {
    //creamos vista o pagina principal/
    const contPrincipal = document.getElementById("root");
    //creamos container principal
    contPrincipal.innerHTML=`<div id="contInit" class="contInit">
                                <div id="contHeader" class="contHeader">
                                    <img class="logo" src="assets/img/logo.png"></a>
                                </div>
                                <div id="contBody" class="contBody">
                                    <div class="body1">
                                        <h3>Te conectamos con miles de emprendedores de todo el país.</h3>
                                    </div>
                                    <div class="body2" >
                                        <img src="/assets/img/001-tienda.png" id="store" class="imgInit">
                                        <h4>Soy tienda</h4>
                                    </div>
                                    <div class="body3">
                                        <img src="/assets/img/002-usuario.png" id="user" class="imgInit">
                                        <h4>Soy cliente</h4>
                                    </div>
                                    <div class="body4">
                                    <h3 class="phrase">Comprar en pequeños comercios te hace grande</h3>
                                    </div>
                                </div>
                                <div id="contFooter" class="contFooter"></div>
                            </div>    
                                `

   
    

    

    const store = document.getElementById("store");
    store.addEventListener('click', () => {
        viewLogin();
        
    })


    const user=document.getElementById("user");
    user.addEventListener("click",()=>{
       
        viewLogin();
    })


  
}
