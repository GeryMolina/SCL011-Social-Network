import { viewPerfil } from "../view/viewPerfil.js";

    

//agrega documentos


export const addPost= () =>{
    var db= firebase.firestore()
    //const name = document.getElementById('name').textContent = firebase.auth().currentUser.displayName;
    const post = document.getElementById('post').value
    db.collection("Post").add({
        id: firebase.auth().currentUser.uid,
        post: post

    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            ///Para que luego de ingrsar los datos los imputs aparezcan vacios 
           //document.getElementById('name').value = '';
            //document.getElementById('post').value = '';
            viewPerfil();

        })
        .catch(function (error) {
            console.log("Error adding document: ", error);
        })
        
}

//  //Leer documentos 
export const showPost =()=>{
    const print = document.getElementById('post2');
    console.log('Soy contenido')
    var db= firebase.firestore();
    
    db.collection("Post").onSnapshot((querySnapshot) => {
        print.innerHTML = ''; //esto se hace para vaciar la tabla
        querySnapshot.forEach((doc) => {
            print.innerHTML += `
            <p id="posteo" class="phrase">${doc.data().post}</p>
                <img class= "delete" src="assets/img/borrar.png" onclick= "eliminar('${doc.id}')">
                <img class= "delete" src="assets/img/lapiz.png" onclick= "editar('${doc.id}','${doc.data().post}')">            
            `
        });
    });
    
}


//borrar documentos
function eliminar(id) {
    var db= firebase.firestore();
    db.collection("Post").doc(id).delete()
        .then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        })

}

///EDitar

function editar(id, post) {
    let db = firebase.firestore();
    document.getElementById('posteo').value = post;
    const bnteditar = document.getElementById('editar');
    bnteditar.innerHTML = `<button id="saveChange">Guardar cambio</button>`;//se cambia el nombre del boton guardar

    const bntSaveChange = document.getElementById('saveChange');
    bntSaveChange.addEventListener('click', () => { //se hace la funcion para manejar el evento del boton y que tenga funcionalidad
        console.log(id);
        var washingtonRef = db.collection("Post").doc(id);


        const post = document.getElementById('posteo').value;

        return washingtonRef.update({
            id: firebase.auth().currentUser.uid,
            first: first,
            post: post

        })
            .then(function () {
                console.log("Document successfully updated!");

                document.getElementById('post').value = '';
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    })
}





