// constants for query selector
const myStudentId = document.getElementById("myStudentId");
const customNumber = document.getElementById("customNumber");
const custColorBtn = document.querySelector(".custColor");
const randColorBtn = document.querySelector(".randColor");
const imageSelect = document.getElementById("imageSelect");
const imagesElement = document.getElementById("images");
const imageSrcArray = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
];

// function to change bg color from user input and add student id
function changeCustomColor() {
  const number = parseInt(customNumber.value);
  changeColor(number);
  myStudentId.innerText = "200327450";
}

// function to change bg color from random no.
function changeRandomColor() {
  const randomNum = Math.floor(Math.random() * 100) + 1;
  changeColor(randomNum);
}

function changeColor(number) {
  let color;
  if (number < 0 || number > 100) {
    color = "red";
  } else if (number <= 20) {
    color = "green";
  } else if (number <= 40) {
    color = "blue";
  } else if (number <= 60) {
    color = "orange";
  } else if (number <= 80) {
    color = "purple";
  } else {
    color = "yellow";
  }
  document.body.style.backgroundColor = color;
}

// function to generate options for select list
function addList() {
  // Tip: you might have to check length condition so that the list does not keep growing when clicked
  // Tip: use createElement and appendChild inside every for loop to add elements to select list from array
  if (imageSelect.children.length <= 1) {
    for (let i = 0; i < imageSrcArray.length; i++) {
      // Use createElement and appendChild inside every for loop
      // to add elements to select list from array
      const option = document.createElement("option");
      option.value = imageSrcArray[i];
      option.innerText = `Image ${i + 1}`;
      imageSelect.appendChild(option);
    }
  }
}

// function to change image
function changeImage() {
  const selectedImageSrc = imageSelect.value;
  // Updated path to images
  imagesElement.src = "./img/" + selectedImageSrc;
  imagesElement.alt = selectedImageSrc;
}

// event listeners for on click event of buttons and select
custColorBtn.addEventListener("click", changeCustomColor);
randColorBtn.addEventListener("click", changeRandomColor);
imageSelect.addEventListener("click", addList);
// event listeners for on change event of select
imageSelect.addEventListener("change", changeImage);
