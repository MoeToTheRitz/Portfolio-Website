function ChangeLang(params) {
    if (document.getElementById("changeLanguage").innerHTML == "🇩🇪") {

        document.getElementById("changeLanguage").innerHTML = "🇺🇸"
    }
    else 
    
    document.getElementById("changeLanguage").innerHTML = "🇩🇪";
}

function rotateImageClockwise(img1) {
    const image = document.getElementById("img1");
    let angle = 0;
  
    function rotateImage() {
      angle += 1;
      image.style.transform = `rotate(${angle}deg)`;
      requestAnimationFrame(rotateImage);
    }
  
    rotateImage();
  }