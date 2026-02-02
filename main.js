// TAB TITLE

window.onfocus = function() {
  document.title = "RS Portfolio : Welcome";
}

window.onblur = function() {
  document.title = "RS Portfolio : Come Back";
}

// VIDEO PLAYER

const videoDemoReel = document.getElementById('video-demo-reel');
const bodyClass = document.body.classList;

const darken = () => bodyClass.add('dim');
const lighten = () => bodyClass.remove('dim');

videoDemoReel.addEventListener('play',darken);
videoDemoReel.addEventListener('ended',lighten);