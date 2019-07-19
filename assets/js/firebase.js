// FIREBASE
var firebaseConfig = {
    apiKey: "AIzaSyDbPue87h9dyiMWQB948XPEL6DfaOdC7a8",
    authDomain: "project-1-auth.firebaseapp.com",
    databaseURL: "https://project-1-auth.firebaseio.com",
    projectId: "project-1-auth",
    storageBucket: "project-1-auth.appspot.com",
    messagingSenderId: "282483411693",
    appId: "1:282483411693:web:26841c579d78d116"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//MAKE AUTH AND FIRESTORE REFERENCES
const auth = firebase.auth(); //making service with reference too
const db = firebase.firestore(); //initalizing reference to firestore

