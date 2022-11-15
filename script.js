//document.getElementById("justtrying").style.display = "none";


// Work on the Automatic Slides
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 4000); // Change image every 4 seconds
};


// Work on the Reviews

const slides = document.getElementsByClassName("testimony-review");
    let slidePosition = 0;
    const totalSlides = slides.length;
    
    document.getElementById("carousel-button-next").addEventListener("click", moveToNextSlide );
    document.getElementById("carousel-button-prev").addEventListener("click", moveToPrevSlide );
    
    function hiddeAllSlides() {
        for (let slide of slides) {
            slide.classList.remove("testimony-review-visible");
            slide.classList.add("testimony-review");
        }
    }
    
    function moveToNextSlide() {
        hiddeAllSlides();
    
        if (slidePosition === totalSlides -1) {
            slidePosition = 0;
        }
        else {
            slidePosition++;
        }
        slides[slidePosition].classList.add("testimony-review-visible");
     }
    function moveToPrevSlide() {
        hiddeAllSlides();
            if (slidePosition === 0) {
                slidePosition = totalSlides -1;
            } 
            else {
                slidePosition--;
            }
            slides[slidePosition].classList.add("testimony-review-visible");
        };
let header = document.querySelector("header")

// Navbar 
        const hamburger = document.querySelector(".hamburger");
        const navList = document.querySelector(".nav-list");

        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active"); 
    navList.classList.toggle("active");
    header.style.backgroundColor = "#000"
    
})
function changeColor(){
  header.style.backgroundColor = "#2e2e41";
 } 

    document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
      header.style.backgroundColor = "#2e2e41";
        hamburger.classList.remove("active");
        navList.classList.remove("active");
        
    }));

    document.getElementById("load-more-btn").addEventListener("click", () => {
        document.getElementById("more-projects").style.display = "block";
    })

    document.getElementById("close").addEventListener("click", () => {
      document.getElementById("more-projects").style.display = "none";
    })
    
   




let body = document.getElementsByTagName("body");




 




