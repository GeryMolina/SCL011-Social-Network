
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

//Monitorea el estado del usurio
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

observador()

// Acceso con Google

const bntGoogle=document.getElementById('bntGoogle');
bntGoogle.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    authentication(provider)
})
    


//Autenticando con Firebase a través del objeto del proveedor de Google
function authentication(base_porvider) {
firebase.auth().signInWithPopup(base_porvider).then(function(result) {
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
