const fullScreenButtonId = "fullScreenButton"

const observer = new MutationObserver((mutations, observer) => {
  const fullScreenButton = document.getElementById(fullScreenButtonId)
  if (fullScreenButton) {
    return
  }
  
  const videoElements = document.getElementsByTagName('video')
  const videoElement = videoElements[0]

  if (videoElement) {
    const videoControlsElement = document.getElementsByClassName("fp-controls")[0]
    if (!videoControlsElement) {
      return
    }

    videoElement.onplay = () => {
      const fullScreenButton = document.createElement("span");
      fullScreenButton.id = fullScreenButtonId
      fullScreenButton.style.marginLeft = "15px"
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("viewBox", "0 0 24 24");
      icon.style.position= "absolute";
      icon.style.top= "3px";
      icon.style.right= "5px";
      icon.style.height= "20px";
      icon.style.fill= "white";
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z");
      icon.appendChild(path);
      fullScreenButton.appendChild(icon);

      fullScreenButton.onclick = () => {
        videoElement.requestFullscreen();
      }

      videoControlsElement.appendChild(fullScreenButton)
    }
  }
});

observer.observe(document, {
  subtree: true,
  attributes: true
});
