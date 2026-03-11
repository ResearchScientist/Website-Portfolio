// TAB TITLE

window.onfocus = function() {
  document.title = "RS Portfolio : Welcome";
}

window.onblur = function() {
  document.title = "RS Portfolio : Come Back";
}

const projectsMenuButton = document.getElementById('projects-menu-button');
const projectsSubMenu = document.getElementById('projects-sub-menu');

projectsMenuButton.addEventListener('click',toggleSubMenu);

function toggleSubMenu() {
  projectsSubMenu.classList.toggle('show-sub-menu');
  console.log('clicked toggle');
  
}