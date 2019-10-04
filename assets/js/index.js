//Lazy loading the vimeo videos
//modified from link below to add animation transition

//Get all the videos
const videos = document.querySelectorAll(".video-wrap");

//Add walter class
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

//apply function when video is clicked
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
    img: "assets/images/project-logos/logo.png",
    style: "project inverted"
  },
  {
    url: "http://carnegieconstructionscotland.co.uk/",
    name: "Carnegie Construction",
    img: "assets/images/project-logos/cropped-Carnegie-Construction-Logo.png",
    style: "project"
  },
  {
    url: "http://lohjoineryltd.co.uk/",
    name: "LOH Joinery",
    img: "assets/images/project-logos/loh.png",
    style: "project watson"
  },
  {
    url: "http://crawfordflooring.co.uk/",
    name: "Crawford Flooring",
    img: "assets/images/project-logos/cropped-Crawford-flooring-Logo.jpg",
    style: "project"
  },
  {
    url: "http://lauraporterbeauty.co.uk/",
    name: "Laura Porter",
    img: "assets/images/project-logos/cropped-cropped-logo-white.png",
    style: "project inverted"
  },
  {
    url: "https://gilliestechnicalservices.com/",
    name: "Gillies Tech",
    img: "assets/images/project-logos/cropped-gillies-125.jpg",
    style: "project"
  },
  {
    url: "http://hotelk9.co.uk/",
    name: "Hotel K9",
    img: "assets/images/project-logos/cropped-Pet-hotel-logo-1-1.jpg",
    style: "project"
  },
  {
    url: "http://switchease.co.uk/",
    name: "Switchease",
    img:
      "assets/images/project-logos/cropped-Switchease-Colour-Transparent-BG.png",
    style: "project"
  },
  {
    url: "http://concept-cabins.co.uk/",
    name: "Concept Cabins",
    img: "assets/images/project-logos/cropped-Web-Logo-Concept-Cabins.png",
    style: "project"
  },
  {
    url: "http://winwinbusiness.co.uk/",
    name: "cWin Win Business",
    img: "assets/images/project-logos/cropped-win-win-light-01.png",
    style: "project inverted"
  },
  {
    url: "http://watsonbuildingcontractors.co.uk/",
    name: "Watson",
    img: "assets/images/project-logos/cropped-Watson-Logo.png",
    style: "project watson"
  },
  {
    url: "http://uniquefitnessglasgow.co.uk/",
    name: "Unique Fitness",
    img: "assets/images/project-logos/unique-fitness.png",
    style: "project inverted"
  }
];

//Empty array we can shove our formated html in
let contents = [];

//Pushing formated version of the data into contents
clients.forEach(client => {
  contents.push([
    `<div class="${client.style}"><a href="${client.url}" target="_blank"><img src="${client.img}" alt="${client.name}"/></a></div>`
  ]);
});

//iterating through contents and returning a string of html
let htmlData = "";
for (let i = 0; i < contents.length; i++) {
  htmlData += contents[i][0];
}

//injecting our new string into the page
document.getElementById("logoProjects").innerHTML = htmlData;
