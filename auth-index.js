// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals); //m.mdodal is the initalized property
  
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  
  });