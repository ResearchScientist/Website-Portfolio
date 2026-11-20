// TAB TITLE

window.onfocus = function() {
  document.title = "RS Portfolio : Welcome";
}

window.onblur = function() {
  document.title = "RS Portfolio : Come Back";
}

// MAIN NAV SUB MENU

const projectsLI = document.getElementById('projects-li');
const projectsMenuButton = document.getElementById('projects-menu-button');
const projectsSubMenu = document.getElementById('projects-sub-menu');
const projectPreviewLink = document.getElementById('project-preview-link');
const projectPreview = document.getElementById('project-preview');

let subMenuThumbsPreFetched = false;

projectsMenuButton.addEventListener('mouseenter',prefetchSubMenuThumbs);
projectsMenuButton.addEventListener('focusin',prefetchSubMenuThumbs);
document.addEventListener('click',toggleSubMenu);
projectsSubMenu.addEventListener('mouseover',showThumbnail);
projectsSubMenu.addEventListener('mouseleave',hideThumbnail);
projectsSubMenu.addEventListener('focusin',showThumbnail);
projectsSubMenu.addEventListener('focusout',hideThumbnail);
projectsLI.addEventListener('focusout',closeSubMenuOnFocusOut);
projectsLI.addEventListener('keydown',closeSubMenuWithESC);

function prefetchSubMenuThumbs() {
  if (subMenuThumbsPreFetched) {
    return;
  }
  subMenuThumbsPreFetched = true;
  const thumbLinks = projectsSubMenu.querySelectorAll('a[data-thumb]');
  thumbLinks.forEach((link) => {
    const img = new Image();
    img.src = link.getAttribute('data-thumb');
  });
}

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
    closeSubMenu();
  }
}

function showThumbnail(e) {
  const target = e.target.closest('a[data-thumb]');
  if (!target) {
    return;
  }
  const imgURL = target.getAttribute('data-thumb');
  const projURL = target.getAttribute('href');
  projectPreview.style.backgroundImage = `url(${imgURL})`;
  projectPreviewLink.setAttribute('href',projURL);
  projectPreview.classList.add('visible');
}

function hideThumbnail(e) {
  if (e && e.type === 'focusout' && projectsSubMenu.contains(e.relatedTarget)) {
    return;
  }
  projectPreview.classList.remove('visible');
}

function closeSubMenuOnFocusOut(e) {
  if (!projectsLI.contains(e.relatedTarget)) {
    closeSubMenu();
  }
}

function closeSubMenuWithESC(e) {
  if (e.key === 'Escape' && projectsSubMenu.classList.contains('show-sub-menu')) {
    closeSubMenu();
    projectsMenuButton.focus();
  }
}

function closeSubMenu() {
  projectsSubMenu.classList.remove('show-sub-menu');
  projectsMenuButton.setAttribute('aria-expanded','false');
  hideThumbnail();
}