document.addEventListener("DOMContentLoaded", function () {
  let popup = document.getElementById("videoPopup");
  let videoFrame = document.getElementById("videoFrame");

  // Open Popup
  document.querySelectorAll(".openVideo").forEach((button) => {
    button.addEventListener("click", function () {
      let videoUrl = this.getAttribute("data-video"); // Get video URL
      videoFrame.src = videoUrl;
      popup.style.display = "flex";
    });
  });

  // Close Popup
  document.querySelector(".close").addEventListener("click", function () {
    popup.style.display = "none";
    videoFrame.src = ""; // Stop video playback
  });
});
