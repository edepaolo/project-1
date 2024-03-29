

//listen for auth status changes
auth.onAuthStateChanged(user => {
  if (user) {
    //get data
    db.collection('playlist').get().then(snapshot => {
      //setupGuides(snapshot.docs); //PHASE II -- Displaying playlist when user is signed in
      setupUI(user);
    });
  }
  else{
    setupUI();
    //setupGuides([]); //calling with empty array to remove data //PHASE II -- Empty playlist when user is signed out
  }
});

//SIGN UP
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // get user info
    const email = signupForm['signup-email'].value;
    const password = signupForm['signup-password'].value;

    console.log(email, password);

    //sign up the user
    //auth = in html references auth firebase
    auth.createUserWithEmailAndPassword(email, password).then(cred => {
        console.log(cred);
        //colse the signup modal and reset form
        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();
    })  
})

// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});

// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // get user info
    //can use 2nd email and password const because it is in a different scope
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;

  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });

});