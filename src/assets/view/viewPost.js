import { addPost } from "../js/post.js"
import {viewPerfil} from "./viewPerfil.js"
import {viewLikes} from "./viewLikes.js"
import {viewWall} from "./viewWall.js"
import {viewConfig} from "./viewConfig.js"

export const viewPost= () =>{
    const contPrincipal = document.getElementById("root");
    contPrincipal.innerHTML=`<div id="contInit1" class="contInit1">
                               <div id="contHeader" class="contHeader3">
                                   <h1 class="title">Publicar</h1>
                                   <img class="store" src="assets/img/tienda.png">
                               </div>
                               <div id="contBody" class="contBody4">
                                   <div class="body15">
                                        <img class="imgInit" src="assets/img/tienda.png">
                                        <p id="name" class="nameStore2">Tienda Doggypaws</p>
                                   </div>
                                   <div class="body16">
                                        <textarea class="post" id="post" cols="30" rows="10"></textarea>
                                        <img class="photo" src="assets/img/camara.png">
                                   </div>
                                   <div class="body17">
                                        <button id= "bntSave" class="btnRegister">Publicar</button>
                                    </div>
                                </div>
                                <div id="contFooter" class="contFooter1">
                                    <img id="house" class="menu" src="assets/img/casa.png">
                                    <img id="add" class="menu" src="assets/img/anadir.png">
                                    <img id="likes" class="menu" src="assets/img/corazon.png">
                                    <img id="configuration" class="menu" src="assets/img/engranaje.png">
                                </div>
                            </div>      `
    
 
    const bntSave = document.getElementById('bntSave');
    bntSave.addEventListener('click', () => {
        addPost();
        viewPerfil();
    })
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
                         
    const likes = document.getElementById("likes");
    likes.addEventListener("click",()=>{
        viewLikes();
    })
                         
                         
    const configuration = document.getElementById("configuration");
    configuration.addEventListener("click", () => {
        viewConfig();                  
    })
}