// TAB TITLE

window.onfocus = function() {
  document.title = "RS Portfolio : Welcome";
}

window.onblur = function() {
  document.title = "RS Portfolio : Come Back";
}

// MAIN NAV SUB MENU

const projectsMenuButton = document.getElementById('projects-menu-button');
const projectsSubMenu = document.getElementById('projects-sub-menu');

document.addEventListener('click',toggleSubMenu);

function toggleSubMenu(e) {
  const projectsButtonClicked = projectsMenuButton.contains(e.target);
  const subMenuClicked = projectsSubMenu.contains(e.target);
  if (projectsButtonClicked) {
    projectsSubMenu.classList.toggle('show-sub-menu');
    if (projectsSubMenu.classList.contains('show-sub-menu')) {
      projectsMenuButton.setAttribute('aria-expanded','true');
    }
    else {
      projectsMenuButton.setAttribute('aria-expanded','false');
    }
  }
  else if (!subMenuClicked) {
    projectsSubMenu.classList.remove('show-sub-menu');
    projectsMenuButton.setAttribute('aria-expanded','false');
  }
  if (subMenuClicked && e.target.tagName === 'A') {
    projectsSubMenu.classList.remove('show-sub-menu');
    projectsMenuButton.setAttribute('aria-expanded','false');
  }
}