var musicPlayer = document.getElementById('musicPlayer');

function playMusic() {
  musicPlayer.play();
}

function pauseMusic() {
  musicPlayer.pause();
}

function adjustVolume(volume) {
  musicPlayer.volume = volume;
}