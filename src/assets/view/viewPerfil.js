import {viewPost} from "./viewPost.js"
import {viewLikes} from "./viewLikes.js"
import {viewWall} from "./viewWall.js"
import {viewConfig} from "./viewConfig.js"

export const viewPerfil= () =>{
    const contPrincipal = document.getElementById("root");
    contPrincipal.innerHTML=`<div id="contInit1" class="contInit1">
                               <div id="contHeader" class="contHeader3">
                                   <h1 class="title">Mi Perfil</h1>
                                   <img class="store" src="assets/img/tienda.png">
                               </div>
                               <div id="contBody" class="contBody5">
                                    <div class="body18">
                                    <p class="numbers">367</p>
                                    <img class="likeB" src="assets/img/corazon.png">
                                    <p class="numbers">64</p>
                                    <img class="likeB" src="assets/img/comentario.png">
                                </div>
                                    <div class="body19">
                                        <img class="imgInit" src="assets/img/tienda.png">
                                    </div>    
                                    <div class="body19b"> 
                                        <p class="nameStore2">Tienda Doggypaws</p>
                                        <p class="frase">Venta de accesoros de mascotas</p>
                                        <p class="link">www.doggypaws.cl</p>
                                        <p class="frase">Ubicada en Vicuña Mackenna 567</p>
                                        
                                   </div>
                                   <div class="body20">
                                        <img class="imgWall" src="https://img.vixdata.io/pd/jpg-large/es/sites/default/files/imj/hogartotal/a/accesorios-para-mascotas-1.jpg">
                                   </div>
                                   <div id="post" class="body21">
                                    <p id="post" class="phrase">${doc.data().post}</p>
                                    </div>
                                    <div id="post" class="body22">
                                        <img class= "delete" src="assets/img/borrar.png" onclick= "eliminar('${doc.id}')">
                                        <img class= "delete" src="assets/img/lapiz.png" onclick= "editar('${doc.id}','${doc.data().post}')">
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
                         
        const likes = document.getElementById("likes");
        likes.addEventListener("click",()=>{
            viewLikes();
        })
                         
                         
        const configuration = document.getElementById("configuration");
        configuration.addEventListener("click", () => {
            viewConfig();             
                                
        })
                            

}