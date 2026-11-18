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
const projectPreviewLink = document.getElementById('project-preview-link');
const projectPreview = document.getElementById('project-preview');

document.addEventListener('click',toggleSubMenu);
projectsSubMenu.addEventListener('mouseover',showThumbnail);
projectsSubMenu.addEventListener('mouseleave',hideThumbnail);
projectsSubMenu.addEventListener('focusin',showThumbnail);
projectsSubMenu.addEventListener('focusout',hideThumbnail);

function toggleSubMenu(e) {
  const projectsButtonClicked = projectsMenuButton.contains(e.target);
  const subMenuClicked = projectsSubMenu.contains(e.target);
  if (projectsButtonClicked) {
    const isSubMenuOpen = projectsSubMenu.classList.toggle('show-sub-menu');
    projectsMenuButton.setAttribute('aria-expanded',String(isSubMenuOpen));
    if (!isSubMenuOpen) {
      hideThumbnail();
    }
  }
  else if (!subMenuClicked || e.target.closest('a')) {
    projectsSubMenu.classList.remove('show-sub-menu');
    projectsMenuButton.setAttribute('aria-expanded','false');
    hideThumbnail();
  }
}

// function toggleSubMenu(e) {
//   const projectsButtonClicked = projectsMenuButton.contains(e.target);
//   const subMenuClicked = projectsSubMenu.contains(e.target);
//   if (projectsButtonClicked) {
//     projectsSubMenu.classList.toggle('show-sub-menu');
//     if (projectsSubMenu.classList.contains('show-sub-menu')) {
//       projectsMenuButton.setAttribute('aria-expanded','true');
//     }
//     else {
//       projectsMenuButton.setAttribute('aria-expanded','false');
//     }
//   }
//   else if (!subMenuClicked) {
//     projectsSubMenu.classList.remove('show-sub-menu');
//     projectsMenuButton.setAttribute('aria-expanded','false');
//   }
//   if (subMenuClicked && e.target.tagName === 'A') {
//     projectsSubMenu.classList.remove('show-sub-menu');
//     projectsMenuButton.setAttribute('aria-expanded','false');
//     projectPreview.classList.remove('visible');
//   }
// }

// function showThumbnail(e) {
//   const target = e.target;
//   if (target.tagName === 'A' && target.hasAttribute('data-thumb')) {
//     const imgURL = target.getAttribute('data-thumb');
//     const projURL = target.getAttribute('href');
//     projectPreview.style.backgroundImage = `url(${imgURL})`;
//     projectPreviewLink.setAttribute('href',projURL);
//     projectPreview.classList.add('visible');
//   }
// }

function showThumbnail(e) {
  const target = e.target.closest('a[data-thumb]');
  if (target) {
    const imgURL = target.getAttribute('data-thumb');
    const projURL = target.getAttribute('href');
    projectPreview.style.backgroundImage = `url(${imgURL})`;
    projectPreviewLink.setAttribute('href',projURL);
    projectPreview.classList.add('visible');
  }
}

// function hideThumbnail() {
//   projectPreview.classList.remove('visible');
// }

function hideThumbnail(e) {
  if (e && e.type === 'focusout' && projectsSubMenu.contains(e.relatedTarget)) {
    return;
  }
  projectPreview.classList.remove('visible');
}