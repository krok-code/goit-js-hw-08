import Player from '@video/player';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('video-player');
const player = new Player(iframe);

document.addEventListener('DOMContentLoaded', () => {
    const savedTime = localStorage.getItem('videoplayer-current-time');
    if (savedTime) {
        player.setCurrentTime(savedTime);
    }
});

const saveTimeThrottled = throttle((currentTime) => {
    localStorage.setItem('videoplayer-current-time', currentTime);
}, 1000);

player.on('timeupdate', (data) => {
    const currentTime = data.seconds;
    saveTimeThrottled(currentTime);
});
