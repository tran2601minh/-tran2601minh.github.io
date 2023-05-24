var body = document.body;
var currentImage = 'troll.png';
var images = ['troll.png', 'night.png'];
var currentIndex = 0;

function switchBackgroundImage() {
  currentIndex = (currentIndex + 1) % images.length;
  body.style.backgroundImage = `url('${images[currentIndex]}')`;
}