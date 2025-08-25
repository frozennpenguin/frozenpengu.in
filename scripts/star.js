document.addEventListener("DOMContentLoaded", function () {
  placeRandomStars();
});

function placeRandomStars() {
  // Pixel density: 1 star per 5000 pixels
  const pixelDensity = 5000;

  const bodyWidth = document.body.clientWidth - 2;
  const bodyHeight = document.body.clientHeight - 2;

  const totalPixels = bodyWidth * bodyHeight;

  const numberOfStars = Math.floor(totalPixels / pixelDensity);

  for (let i = 0; i < numberOfStars; i++) {
    const star = document.createElement("div");
    star.classList.add("star");

    const randomX = Math.floor(Math.random() * bodyWidth);
    const randomY = Math.floor(Math.random() * bodyHeight);

    star.dataset.percentX = randomX / bodyWidth;
    star.dataset.percentY = randomY / bodyHeight;

    star.style.left = `${randomX}px`;
    star.style.top = `${randomY}px`;

    const pulseDuration = 4 + Math.random() * 8;
    star.style.animation = `pulse ${pulseDuration}s infinite`;

    document.body.appendChild(star);

    void star.offsetWidth;

    // Fade in the star
    setTimeout(() => (star.style.opacity = "1"), 10);
  }
}