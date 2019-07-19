//const guideList = document.querySelector('.guides'); //PART OF PHASE II - pull in saved playlists
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');

const setupUI = (user) => {
  if (user) {
    //toggle UI elements 
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  }
  else {
    // toggle UI elemnts
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
}

// ==========PULL IN SAVED PLAYLISTS=======
//============PHASE II=====================
      // const setupGuides = (data) => {
      // if(data.length) {
      //   let html = '';
      //   data.forEach(doc => {
      //     const guide = doc.data(); //getting data from each doc of array and storing in const
      //     const li = `
      //     <li>
      //     <div class="collapsible-header grey lighten-4">${guide.title}</div>
      //     <div class="collapsible-body white">${guide.song}</div>
      //     </li>
      //     `;
      //     html += li  //its going to append to html for how ever many we have
      //   });

      //   guideList.innerHTML = html;
      // }
      // else{
      //   guideList.innerHTML = '<h5 class = "center-align">Login to view previous playlist </h5>'
      // }
      // }



// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals); //m.mdodal is the initalized property
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });