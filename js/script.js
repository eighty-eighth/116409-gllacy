var link = document.querySelector(".btn-feedback");
var popup = document.querySelector(".modal-feedback");
var close = popup.querySelector(".modal-feedback-close");
var overlay = document.querySelector(".modal-overlay");

link.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.add("modal-feedback-show");
    overlay.classList.add("modal-overlay-enable");
});

close.addEventListener("click", function(event) {
    event.preventDefault();
    popup.classList.remove("modal-feedback-show");
    overlay.classList.remove("modal-overlay-enable");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-feedback-show")) {
      popup.classList.remove("modal-feedback-show");
    }
  }
});
