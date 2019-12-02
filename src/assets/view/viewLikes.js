import {viewPost} from "./viewPost.js"
import {viewPerfil} from "./viewPerfil.js"
import {viewWall} from "./viewWall.js"
import {viewConfig} from "./viewConfig.js"


export const viewLikes = () => {
    
    const contPrincipal = document.getElementById("root");
    contPrincipal.innerHTML=`<div id="contInit1" class="contInit1">
                               <div id="contHeader" class="contHeader2">
                                   <img class="logo2" src="assets/img/logo2.png">
                                   <img id="perfil" class="store" src="assets/img/tienda.png">
                               </div>
                                    <div id="contBody" class="contBody6">
                                        <div class="body23">
                                                <img class="usuario" src="assets/img/usuario.png">      
                                                <p id="" class="addlikes">A Juan le gustó tu publicación</p>
                                        </div>
                                        <div class="body24">
                                                <img class="usuario" src="assets/img/usuario.png">          
                                                <p id="" class="addlikes">A Ana le gustó tu publicación</p>
                                        </div>
                                        <div class="body25">
                                                <img class="usuario" src="assets/img/usuario.png">         
                                                <p id="" class="addlikes">A German le gustó tu publicación</p>
                                        </div>
                                        <div class="body26">
                                                <img class="usuario" src="assets/img/usuario.png">         
                                                <p id="" class="addlikes">A Laura le gustó tu publicación</p>
                                        </div>
                                        <div class="body27">
                                                <img class="usuario" src="assets/img/usuario.png">         
                                                <p id="" class="addlikes">A Rodrigo le gustó tu publicación</p>
                                        </div>
                                        <div class="body28">        
                                        </div>
                                    </div>
                               <div id="contFooter" class="contFooter1">
                                    <img id="house" class="menu" src="assets/img/casa.png">
                                    <img id="add" class="menu" src="assets/img/anadir.png">
                                    <img id="likes" class="menu" src="assets/img/corazon.png">
                                    <img id="configuration" class="menu" src="assets/img/engranaje.png">
                               </div>
                           </div>      `
    
 
    const house = document.getElementById("house");
    house.addEventListener("click",()=>{
        viewWall();                   
    })

   const add = document.getElementById("add");
   add.addEventListener('click', () => {
       viewPost();
   })

   const perfil = document.getElementById("perfil");
   perfil.addEventListener('click', ()=>{
       viewPerfil();
   })

   const configuration = document.getElementById("configuration");
   configuration.addEventListener("click", () => {  
        viewConfig();
   })
}   