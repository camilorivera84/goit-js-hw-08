import VimeoPlayer from '@vimeo/player';
import throttle from 'lodash.throttle';
const player = new VimeoPlayer('vimeo-player');

player.on('timeupdate', throttle(updateCurrentTime, 1000));

function updateCurrentTime(event) {
  const currentTime = event.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime.toString());
}

document.addEventListener('DOMContentLoaded', () => {
  const currentTime = localStorage.getItem('videoplayer-current-time');
  if (currentTime) {
    player.setCurrentTime(parseFloat(currentTime));
  }
});
/*const localStorageKey = 'videoplayer-current-time';
const onPlay = function (data) {
  // data is an object containing properties specific to that event
};

player.on('play', onPlay);
player
  .setCurrentTime(30.456)
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
player.setCurrentTime(
  then(function (time) {
    time = localStorage.getItem(localStorageKey);
  })
);*/
