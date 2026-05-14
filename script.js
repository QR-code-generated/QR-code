const images = [
  "images/shared image.jpg",
  "images/shared image (1).jpg",
  "images/shared image (2).jpg",
  "images/shared image (3).jpg",
  "images/shared image (4).jpg",
  "images/shared image (5).jpg",
  "images/shared image (6).jpg",
  "images/shared image (7).jpg",
  "images/shared image (8).jpg",
  "images/shared image (9).jpg",
  "images/shared image (10).jpg",
  "images/shared image (11).jpg",
  "images/shared image (12).jpg",
  "images/shared image (13).jpg",
  "images/shared image (14).jpg",
  "images/shared image (15).jpg"
];

let lastImage = localStorage.getItem("lastImage");

let availableImages = images.filter(img => img !== lastImage);

let randomImage =
  availableImages[Math.floor(Math.random() * availableImages.length)];

document.getElementById("randomImage").src = randomImage;

localStorage.setItem("lastImage", randomImage);