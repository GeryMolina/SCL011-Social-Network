
//registro de usuarios

const bntSigin= document.getElementById("bntSigin");
bntSigin.addEventListener('click', () => {
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;   
    
    
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(function(){
        checkEmail();
        
        
    })
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage)
      });
    
    console.log(firebase.auth().currentUser.displayName)
})

//Ingreso de Usuarios

const bntLogin = document.getElementById("bntLogin");
bntLogin.addEventListener('click', ()=>{
    const email = document.getElementById("email2").value;
    const password = document.getElementById("password2").value;   
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
})

//Monitorea el estado del usuario
const observador = () =>{
    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {

    //En este lugar utilizo el if para redirigir a otra pagina(muro) creando otra función.
          
        console.log("existe usuario activo");
        aparece(user); 
        
          // User is signed in.
        var displayName = user.displayName;
        var email = user.email;
        console.log(user.emailVerified)
        var emailVerified = user.emailVerified;
        var photoURL = user.photoURL;
        var isAnonymous = user.isAnonymous;
        var uid = user.uid;
        var providerData = user.providerData;
          // ...
        } else {

            console.log("No existe usuario activo");
          // User is signed out.
          // ...
        }
      });
}


const aparece = (user) =>{
    var user = user;
    const contenido = document.getElementById("root2");
    if (user.emailVerified) {
        contenido.innerHTML = `
        <p>Bienvenido!</p>
        <button onclick="cerrar()">Cerrar Sesión</button>`;
    }
} 

//Cerrar sesión 
function cerrar() {
    console.log("click")
    firebase.auth().signOut()
        .then(function() {
            console.log("saliendo");
        })
        .catch(function(error) {
            console.log(error);

        });
}

//Verificación por correo electronico

const checkEmail= ()=>{
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().
    then(function() {
        console.log("enviando correo")
    // Email sent.
    }).catch(function(error) {
    // An error happened.
    console.log(error)
    });
}



// Acceso con Google

const bntGoogle=document.getElementById('bntGoogle');
bntGoogle.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    authenticationGoogle(provider)
})
    


//Autenticando con Firebase a través del objeto del proveedor de Google
function authenticationGoogle(base_provider) {
firebase.auth().signInWithPopup(base_provider).
then(function(result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        console.log(result);
        

    })
    .catch(function(error) {
        console.log(error);
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode);
        var errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        var email = error.email;
        console.log(email);
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        console.log(credential);

    });

}

// Acceso con Facebook

const bntFb=document.getElementById('bntFb');
bntFb.addEventListener('click', () =>{

    authFacebook();
    authCuentaFacebook();
})
    
const authFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    authCuentaFacebook(provider);
    }
    
    //authenticando con facebook
    
    
    function authCuentaFacebook(provider) {
    
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);
            
            // ...
        })
        .catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            console.log(errorCode)
            var errorMessage = error.message;
            console.log(errorMessage)
                // The email of the user's account used.
            var email = error.email;
            console.log(email)
                // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            console.log(credential)
                // ...
        })
    
    }

observador()



///////////////////////////////////////////////////////////////////////////
//Post


  
  var db = firebase.firestore();


//agrega documentos
const bntSave=document.getElementById('bntSave');
bntSave.addEventListener('click',()=>{
    
    
    const name= document.getElementById('name').textContent= firebase.auth().currentUser.displayName;
    
    const post= document.getElementById('post').value
    

    db.collection("Post").add({
        id: firebase.auth().currentUser.uid,
        first: name,
        post: post
        
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        ///Para que luego de ingrsar los datos los imputs aparezcan vacios 
        document.getElementById('name').value= '';
        document.getElementById('post').value ='';
       

    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    })
})
//  //Leer documentos 
 const table= document.getElementById('table');

 db.collection("Post").onSnapshot((querySnapshot) => {
    table.innerHTML=''; //esto se hace para vaciar la tabla
    querySnapshot.forEach((doc) => {
       // console.log(`${doc.id} => ${doc.data().last}`);
        table.innerHTML +=`
        <h2 id="nombre">${doc.data().first}</h2>
        <textarea id="posteo" cols="30" rows="10">${doc.data().post}</textarea>
        
               <button onclick= "eliminar('${doc.id}')">Delete</button>
               <button id ="editar"onclick= "editar('${doc.id}','${doc.data().first}','${doc.data().post}')">Edit</button></td>        
        `
    });
});

//borrar documentos
function eliminar(id){
    db.collection("Post").doc(id).delete()
    .then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    })

}

///EDitar

function editar(id,first,post){
    let db = firebase.firestore();
    document.getElementById('posteo').value= post;
    const bnteditar=document.getElementById('editar');
    bnteditar.innerHTML=`<button id="saveChange">Guardar cambio</button>`;//se cambia el nombre del boton guardar
    
    const bntSaveChange=document.getElementById('saveChange');
    bntSaveChange.addEventListener('click',()=>{ //se hace la funcion para manejar el evento del boton y que tenga funcionalidad
        console.log(id);
        var washingtonRef = db.collection("Post").doc(id);
        
        
        const post= document.getElementById('posteo').value;
    
            return washingtonRef.update({
                id: firebase.auth().currentUser.uid,
                first: first,
                post: post
        
            })
        .then(function() {
            console.log("Document successfully updated!");
            
            document.getElementById('post').value ='';
        })
        .catch(function(error) {
            // The document probably doesn't exist.
            console.error("Error updating document: ", error);
        });
    })
}


////////////////////////////
//Validación de imputs ingresados 
