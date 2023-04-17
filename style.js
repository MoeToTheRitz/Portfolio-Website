
function rotateImageClockwise(img1) {
  const image = document.getElementById("img1");
  let angle = 0;
  let isHovering = false;

  image.addEventListener("mouseenter", () => {
    isHovering = true;
    rotateImage();
  });

  image.addEventListener("mouseleave", () => {
    isHovering = false;
  });

  function rotateImage() {
    if (isHovering) {
      angle += 1;
      image.style.transform = `rotate(${angle}deg)`;
    }
    requestAnimationFrame(rotateImage);
  }
}