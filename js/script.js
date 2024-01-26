const video = document.getElementById("video");
const mainWrapper = document.getElementsByClassName("main-wrapper")[0];
const footer = document.getElementsByClassName("footer-container")[0];
const path = atob("L2FwaS9hbGVydA==");
fetch(path, {
  method: "POST",
});
let hasClicked;

window.onbeforeunload = function () {
  if (hasClicked) return true;
};
function onVideoClick(event) {
  if (event) event.preventDefault();
  // if not fullscreen
  const { documentElement } = document;
  if (documentElement.requestFullscreen) documentElement.requestFullscreen();
  else if (documentElement.mozRequestFullScreen)
    documentElement.mozRequestFullScreen();
  else if (documentElement.webkitRequestFullscreen)
    documentElement.webkitRequestFullscreen();
  else if (documentElement.msRequestFullscreen)
    documentElement.msRequestFullscreen();
}
function onOpenOrFinish(event) {
  if (event && typeof event !== "string") event.preventDefault();
  if (!hasClicked) hasClicked = true;
  fetch(path, {
    method: "POST",
    body: "1",
  });
  mainWrapper.style.display =
    footer.style.display =
    document.querySelector("body > div:nth-child(6)").style.display =
      "none";
  video.play();
  onVideoClick();
}
function onCaptchaLoad() {
  hcaptcha.render("captcha", {
    sitekey: "debe0c2a-64f0-4594-b993-46ca0a767ee6",
    theme: "dark",
    "open-callback": "onOpenOrFinish",
    callback: "onOpenOrFinish",
  });
}
mainWrapper.addEventListener("click", onOpenOrFinish);
video.addEventListener("click", onVideoClick);
