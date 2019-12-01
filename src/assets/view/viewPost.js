import { addPost } from "../js/post.js";

export const viewPost= () =>{
    const contPrincipal = document.getElementById("root");
    contPrincipal.innerHTML=`<div id="contInit1" class="contInit1">
                               <div id="contHeader" class="contHeader2">
                                   <<h1>Publicar</h1>
                                   <img class="store" src="assets/img/tienda.png">
                               </div>
                               <div id="contBody" class="contBody4">
                                   <div class="body15">
                                        <img class="store2" src="assets/img/tienda.png">
                                        <p id="name" class="nameStore2">Tienda Doggypaws</p>
                                   </div>
                                   <div class="body16">
                                        <textarea name="" id="post" cols="30" rows="10"></textarea>
                                   </div>
                                        <div class="body17">
                                        <img class="like" src="assets/img/camara.png">
                                   </div>
                                   <div class="body13">
                                        <button id= "bntSave" class="btnRegister">Ingresar</button>
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
    })

}