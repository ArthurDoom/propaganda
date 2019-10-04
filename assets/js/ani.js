import animate from "https://cdn.jsdelivr.net/npm/animateplus@2/animateplus.js";

animate({
  elements: document.querySelector(".test2"),
  easing: "in-out-circular",
  duration: 6500,
  loop: true,
  direction: "alternate",
  transform: [
    "translate3d(-50%, -50%, 0) scale(1)",
    "translate3d(-50%, -50%, 0) scale(1.2)"
  ]
});
