// // array of images
//  const images = [
//     01.jpg,               //index 0 --> image[0]
//     02.jpg,               //index 0 --> image[1]
//     03.jpg,               //index 0 --> image[2]
//     04.jpg,               //index 0 --> image[3]
//     05.jpg,               //index 0 --> image[4]
//     06.jpg,               //index 0 --> image[5]
//  ];
// const firstImage = 0;
// const lastImage = images.length -1;
// let currentImage = 0;
// //Next
// const nextBtn = document.getElementById('Next')
// nextBtn.addEventListener("click",()=>{
//             //get image tag
//             const   imgTag= document.getElementById('image');
//             currentImage ++; // 1
//             console.log(images)
//             // if(currentImage >= lastImage){currentImage = 5; 
//             imgTag.src = images[currentImage];
//             // }
//             document.getElementById('info').innerHTML = (currentImage +1) + '/6';
//         })// prev

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}