// VIDEO PLAYER

const demoReelBody = document.getElementById('demo-reel-body');
const videoDemoReel = document.getElementById('video-demo-reel');
const videoKeys = document.getElementById('video-keys');
const arrowsForward = document.getElementById('arrows-forward');
let cursorTimer;

const darken = () => {
  demoReelBody.classList.add('dim');
  demoReelBody.classList.add('no-cursor');
  videoKeys.style.opacity = 0;
}

const lighten = () => {
  demoReelBody.classList.remove('dim');
  demoReelBody.classList.remove('no-cursor');
}

videoDemoReel.addEventListener('play',darken);
videoDemoReel.addEventListener('ended',lighten);

const hideCursor = () => {
  if (demoReelBody && !videoDemoReel.paused) {
    demoReelBody.classList.add('no-cursor');
  }
};

const handleCursorMovement = () => {
  if (demoReelBody) {
    demoReelBody.classList.remove('no-cursor');
    clearTimeout(cursorTimer);
    if (videoDemoReel && !videoDemoReel.paused) {
      cursorTimer = setTimeout(hideCursor, 750);
    }
  }
};

if (videoDemoReel) {
  document.addEventListener('mousemove',handleCursorMovement);
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
        arrowsForward.style.opacity = 1;
        setTimeout(() => {
          arrowsForward.style.opacity = 0;
        },500);
        break;
      case 'arrowleft':
      case 'j':
        videoDemoReel.currentTime -= 10;
        break;
    }
  });
}
