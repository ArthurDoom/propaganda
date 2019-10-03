//Doesn't pull in vimeo videos untill button is clicked.
//https://webdesign.tutsplus.com/tutorials/how-to-lazy-load-embedded-youtube-videos--cms-26743
//Modified for vimeo auto play needs to be looked at

(function() {
  var video = document.querySelectorAll(".video-wrap");

  for (var i = 0; i < video.length; i++) {
    video[i].addEventListener("click", function() {
      var iframe = document.createElement("iframe");

      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "");
      iframe.setAttribute(
        "src",
        "https://player.vimeo.com/video/" +
          this.dataset.embed +
          "?autoplay=1&loop=1&title=0&byline=0&portrait=0"
      );

      this.innerHTML = "";
      this.appendChild(iframe);
    });
  }
})();

//Get the button:
var scrollButton = document.getElementById("scrollBtn");

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.classList.add("show");
  } else {
    scrollButton.classList.remove("show");
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};
