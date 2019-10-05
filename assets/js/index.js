//Lazy loading the vimeo videos
//modified version to add animation transition because the stutter is horrible without - based on link below
//https://webdesign.tutsplus.com/tutorials/how-to-lazy-load-embedded-youtube-videos--cms-26743

//Get all the videos
const videos = document.querySelectorAll(".video-wrap");

//Swap the placeholder image with an iframe
const swapVideo = function() {
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
};

//apply function with a delay and add class when video is clicked
videos.forEach(function(item) {
  item.addEventListener("click", function() {
    this.classList.add("flip-video");
    setTimeout(swapVideo.bind(this), 500);
  });
});

//Scroll back to top button

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

//Clients, urls and logos I'm too lazy to keep adding html to the index so...

//An array with client objects
let clients = [
  {
    url: "http://vbboutique.com/",
    name: "Vintage Bridal Boutique",
    img: "assets/images/project-logos/logo",
    style: "project inverted",
    delay: "0s"
  },
  {
    url: "http://carnegieconstructionscotland.co.uk/",
    name: "Carnegie Construction",
    img: "assets/images/project-logos/cropped-Carnegie-Construction-Logo",
    style: "project",
    delay: "0.2s"
  },
  {
    url: "http://lohjoineryltd.co.uk/",
    name: "LOH Joinery",
    img: "assets/images/project-logos/loh",
    style: "project watson",
    delay: "0.3s"
  },
  {
    url: "http://crawfordflooring.co.uk/",
    name: "Crawford Flooring",
    img: "assets/images/project-logos/cropped-Crawford-flooring-Logo",
    style: "project",
    delay: "0.4s"
  },
  {
    url: "http://lauraporterbeauty.co.uk/",
    name: "Laura Porter",
    img: "assets/images/project-logos/cropped-cropped-logo-white",
    style: "project inverted",
    delay: "0.5s"
  },
  {
    url: "https://gilliestechnicalservices.com/",
    name: "Gillies Tech",
    img: "assets/images/project-logos/cropped-gillies-125",
    style: "project",
    delay: "0.6s"
  },
  {
    url: "http://hotelk9.co.uk/",
    name: "Hotel K9",
    img: "assets/images/project-logos/cropped-Pet-hotel-logo-1-1",
    style: "project",
    delay: "0.7s"
  },
  {
    url: "http://switchease.co.uk/",
    name: "Switchease",
    img: "assets/images/project-logos/cropped-Switchease-Colour-Transparent-BG",
    style: "project",
    delay: "0.8s"
  },
  {
    url: "http://concept-cabins.co.uk/",
    name: "Concept Cabins",
    img: "assets/images/project-logos/cropped-Web-Logo-Concept-Cabins",
    style: "project",
    delay: "0.9s"
  },
  {
    url: "http://winwinbusiness.co.uk/",
    name: "cWin Win Business",
    img: "assets/images/project-logos/cropped-win-win-light-01",
    style: "project inverted",
    delay: "1s"
  },
  {
    url: "http://watsonbuildingcontractors.co.uk/",
    name: "Watson",
    img: "assets/images/project-logos/cropped-Watson-Logo",
    style: "project watson",
    delay: "1.1s"
  },
  {
    url: "http://uniquefitnessglasgow.co.uk/",
    name: "Unique Fitness",
    img: "assets/images/project-logos/unique-fitness",
    style: "project inverted",
    delay: "1.2s"
  }
];

//Empty array we can shove our formated html in
let contents = [];

//Pushing formated version of the data into contents
clients.forEach(client => {
  contents.push([
    `<div class="animate ${client.style}" data-delay="${client.delay}"><a href="${client.url}" target="_blank"><picture><source srcset="${client.img}.webp" type="image/webp"><img src="${client.img}.png" alt="${client.name}"></picture></a></div>`
  ]);
});

//iterating through contents and returning a string of html
let htmlData = "";
for (let i = 0; i < contents.length; i++) {
  htmlData += contents[i][0];
}

//injecting our new string into the page
document.getElementById("logoProjects").innerHTML = htmlData;

//slide in logos

if ("IntersectionObserver" in window) {
  const o_o = document.querySelectorAll(".animate");
  o_o.forEach(project => {
    project.classList.add("slide");
    project.style.animationDelay = project.dataset.delay;
  });
  const animationFun = entries => {
    entries.forEach(entry => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("animated");
        observer.unobserve(entry.target);
      }
    });
  };

  observer = new IntersectionObserver(animationFun);

  o_o.forEach(element => {
    observer.observe(element);
  });
} else {
  console.log("we fucked");
}
