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
