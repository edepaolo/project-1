import 'firebase/auth';

var firebaseConfig = {
    apiKey: process.env.AIzaSyBzON4BmWg7bGO6P4W0B2k_0K8qpwu830Q,
    authDomain: process.env.project-1-storagetester.firebaseapp.com,
    databaseURL: process.env.https://project-1-storagetester.firebaseio.com,
    projectId: process.env.project-1-storagetester,
    storageBucket: process.env.project-1-storagetester.appspot.com,
    messagingSenderId: process.env.609060845971,
    appId: process.env.1:609060845971:web:d10bfc58fe17bcdb,
  };

class Firebase {
    constructor() {
      app.initializeApp(config);
  
      this.auth = app.auth();
    }
  
    // *** Auth API ***
  
    doCreateUserWithEmailAndPassword = (email, password) =>
      this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
      this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
  
    doPasswordReset = email => this.auth.sendPasswordResetEmail(email);
  
    doPasswordUpdate = password =>
      this.auth.currentUser.updatePassword(password);
  }

//================================================================
//USER AUTHENTICATED - GET USER DATA
var user = firebase.auth().currentUser;
var name, email, photoUrl, uid, emailVerified;

if (user != null) {
  name = user.displayName;
  email = user.email;
  photoUrl = user.photoURL;
  emailVerified = user.emailVerified;
  uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
                   // this value to authenticate with your backend server, if
                   // you have one. Use User.getToken() instead.
}