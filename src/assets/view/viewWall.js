
export const viewWall = () => {
    
    const contPrincipal = document.getElementById("root");
    contPrincipal.innerHTML=`<div id="contInit1" class="contInit1">
                               <div id="contHeader" class="contHeader2">
                                   <img class="logo2" src="assets/img/logo2.png">
                                   <img class="store" src="assets/img/tienda.png">
                               </div>
                               <div id="contBody" class="contBody3">
                                   <div class="bodySlider">
                                         <h1>Inicia Sesión</h1>
                                   </div>
                                   <div class="body12">
                                        <p id="" class="nameStore">Moonlook</p>
                                   </div>
                                   <div class="body12B">
                                        <p id="" class="numberLikes">489</p>
                                        <img class="like" src="assets/img/corazon.png">
                                   </div>
                                        <div class="body13">
                                        <img class="imgWall" src="https://bcncoolhunter.com/wp-content/uploads/2019/03/gafas-graduadas-moda-2019.jpg">
                                   </div>
                                   <div class="body14">
                                        <p id="" class="nameStore1">Moonlook</p>
                                        <p class="description">Llegaron nuevos modelos que son tendencia en este 2019. Visita nuestro prefil para enterarte de nuestras novedades y descuentos.</p>
                                   </div>
                               </div>
                               <div id="contFooter" class="contFooter1">
                                    <img id="house" class="menu" src="assets/img/casa.png">
                                    <img id="add" class="menu" src="assets/img/anadir.png">
                                    <img id="likes" class="menu" src="assets/img/corazon.png">
                                    <img id="configuration" class="menu" src="assets/img/engranaje.png">
                               </div>
                           </div>      `
    
 
  

   const add = document.getElementById("add");
   add.addEventListener('click', () => {
       viewPost()
   })


   const likes = document.getElementById("likes");
   likes.addEventListener("click",()=>{
       
   })


   const configuration = document.getElementById("configuration");
   configuration.addEventListener("click", () => {

       

   })
  
   
}
