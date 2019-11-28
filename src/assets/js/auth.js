
//registro de usuarios

export const registerUser =()=> {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (validationEmail(email)){
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(function () {
                checkEmail();


            })
            .catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                alert(errorMessage);
            });
}}

   
function validationEmail(email) {

    if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
       //alert("La dirección de email " + email + " es correcta!.");
    } else {
       alert("La dirección de email es incorrecta!.");
    }
}
//Ingreso de Usuarios

export const login = ()=>{
    const email = document.getElementById("email2").value;
    const password = document.getElementById("password2").value;
    if (validationEmail(email)){
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then (function(){
            closeSession()
        })
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
        });
}
}


export const observador = () => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {

            //En este lugar utilizo el if para redirigir a otra pagina(muro) creando otra función.

            console.log("existe usuario activo");
            //aparece(user);

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


// const aparece = (user) => {
//     var user = user;
//     const contenido = document.getElementById("root2");

//         contenido.innerHTML = `
//         <p>Bienvenido!</p>
//         <button onclick="cerrar()">Cerrar Sesión</button>`;
    
//}

//Cerrar sesión 
export const  closeSession=() => {
    console.log("click")
    firebase.auth().signOut()
        .then(function () {
            console.log("saliendo");
        })
        .catch(function (error) {
            console.log(error);

        });
}

//Verificación por correo electronico

export const checkEmail = () => {
    var user = firebase.auth().currentUser;

    user.sendEmailVerification().
        then(function () {
            console.log("enviando correo")
            // Email sent.
        }).catch(function (error) {
            // An error happened.
            console.log(error)
        });
}



// Acceso con Google



export const authGoogle= ()=>{
    authFB();
    authenticationGoogle();
}

function authFB(){
    const provider = new firebase.auth.GoogleAuthProvider();
    authenticationGoogle(provider)
}
    
function authenticationGoogle(base_provider) {
        firebase.auth().signInWithPopup(base_provider).
            then(function (result) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // The signed-in user info.
                var user = result.user;
                console.log(result);
    
    
            })
            .catch(function (error) {
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
    

//Autenticando con Firebase a través del objeto del proveedor de Google

// Acceso con Facebook
export const authFacebook= () =>{
    authFacebookd();
    authCuentaFacebook();
}



const authFacebookd = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    authCuentaFacebook(provider);
}

//authenticando con facebook


function authCuentaFacebook(provider) {

    firebase.auth().signInWithPopup(provider)
        .then(function (result) {
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.

            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            console.log(user);

            // ...
        })
        .catch(function (error) {
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

//observador()