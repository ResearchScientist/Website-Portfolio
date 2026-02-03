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

if (videoDemoReel) {
  videoDemoReel.onended = () => {
    videoDemoReel.load();
  };

  document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    switch (key) {
      case 'escape':
        e.preventDefault();
        videoDemoReel.load();
        lighten();
        break;
      case ' ':
      case 'k':
        e.preventDefault();
        videoDemoReel.paused ? videoDemoReel.play() : videoDemoReel.pause();
        break;
      case 'arrowright':
      case 'l':
        videoDemoReel.currentTime += 10;
        break;
      case 'arrowleft':
      case 'j':
        videoDemoReel.currentTime -= 10;
        break;
    }
  });
}