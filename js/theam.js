
 function modelbgwh () {
    let modelBg =document.getElementById(" model-bg");
    let width = modelBg.offsetWidth
    let height= modelBg.style.height=width+"px"
    
    
    
    }

modelbgwh()

function aboutModelbgwh () {
    let aoutModelBg =document.getElementById (" about-model-bg");
    let width = aoutModelBg.offsetWidth
    let height= aoutModelBg.style.height=width+"px"
    
    
    
    }

    aboutModelbgwh ()



const testimonialBgElements = document.getElementsByClassName('testimonial-img-bg');

// Loop through each element and apply styles
for (let i = 0; i < testimonialBgElements.length; i++) {
    width= testimonialBgElements[i].offsetWidth
    testimonialBgElements[i].style.height = width+'px'; // Set height
    
}


$(document).ready(function(){
    $('.slider').slick({
        infinite: true,         // Loop through slides
        slidesToShow: 1,        // Show 2 slides at once
        slidesToScroll: 1,      // Scroll one slide at a time
        autoplay: true,         // Enable autoplay
        autoplaySpeed: 2000,    // 2 seconds per slide
        dots: true,             // Enable navigation dots
        arrows: true,           // Enable previous/next arrows
        autoplay: true,
        autoplaySpeed: 600,
    });
});