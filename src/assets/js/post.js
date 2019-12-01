///////////////////////////////////////////////////////////////////////////
//Post



var db = firebase.firestore();


//agrega documentos


export const addPost= () =>{
    const name = document.getElementById('name').textContent = firebase.auth().currentUser.displayName;

    const post = document.getElementById('post').value


    db.collection("Post").add({
        id: firebase.auth().currentUser.uid,
        first: name,
        post: post

    })
        .then(function (docRef) {
            console.log("Document written with ID: ", docRef.id);
            ///Para que luego de ingrsar los datos los imputs aparezcan vacios 
            document.getElementById('name').value = '';
            document.getElementById('post').value = '';


        })
        .catch(function (error) {
            console.error("Error adding document: ", error);
        })
}

//  //Leer documentos 
const table = document.getElementById('table');

db.collection("Post").onSnapshot((querySnapshot) => {
    table.innerHTML = ''; //esto se hace para vaciar la tabla
    querySnapshot.forEach((doc) => {
        // console.log(`${doc.id} => ${doc.data().last}`);
        table.innerHTML += `
        <h2 id="nombre">${doc.data().first}</h2>
        <textarea id="posteo" cols="30" rows="10">${doc.data().post}</textarea>
        
               <button onclick= "eliminar('${doc.id}')">Delete</button>
               <button id ="editar"onclick= "editar('${doc.id}','${doc.data().first}','${doc.data().post}')">Edit</button></td>        
        `
    });
});

//borrar documentos
function eliminar(id) {
    db.collection("Post").doc(id).delete()
        .then(function () {
            console.log("Document successfully deleted!");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        })

}

///EDitar

function editar(id, first, post) {
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





