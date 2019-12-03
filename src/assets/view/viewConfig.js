import {closeSession} from "../js/auth.js"
import {viewPost} from "./viewPost.js"
import {viewPerfil} from "./viewPerfil.js"
import {viewWall} from "./viewWall.js"
import {viewLikes} from "./viewLikes.js"
import {viewInit} from "./viewInit.js"



export const viewConfig = () => {
    
    const contPrincipal = document.getElementById("root");
    contPrincipal.innerHTML=`<div id="contInit1" class="contInit1">
                                    <div id="contHeader" class="contHeader3">
                                        <h1 class="title">Configuración</h1>
                                        <img id="perfil" class="store" src="assets/img/tienda.png">
                                    </div>
                                    <div id="contBody" class="contBody7">
                                        <div class="body23">
                                                      
                                                <p class="config">General</p>
                                        </div>
                                        <div class="body24">
                                                         
                                                <p class="config">Notificaciones</p>
                                        </div>
                                        <div class="body25">
                                                        
                                                <p class="config">Privacidad</p>
                                        </div>
                                        <div id="close" class="body26">
                                                      
                                                <p class="config">Cerrar Sesión</p>
                                        </div>
                                        <div id="delete" class="body27">
                                                       
                                                <p  class="config">Eliminar Cuenta</p>
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
    
    const close = document.getElementById("close");
    close.addEventListener('click', ()=> {
        closeSession();
        
    })      

    const deleteAccount = document.getElementById("delete");
    deleteAccount.addEventListener('click', ()=>{
        viewInit();
    }) 

    const house = document.getElementById("house");
    house.addEventListener('click',()=>{
        viewWall();                   
    })

   const add = document.getElementById("add");
   add.addEventListener('click', () => {
       viewPost();
   })

   const likes = document.getElementById("likes");
    likes.addEventListener("click",()=>{
        viewLikes();
    })

   const perfil = document.getElementById("perfil");
   perfil.addEventListener('click', ()=>{
       viewPerfil();
   })

   
}   