$(document).ready(function() {

    $('.nav-toggler').click(function() {
        $(this).toggleClass('change');
        $('.nav-items').toggleClass('show');
    });

    $('.nav-link').click(function() {
        $('.nav-toggler').toggleClass('change');
        $('.nav-items').toggleClass('show');
    });

   
    window.onload = function() {
        $('.banner__main-btn').addClass('animate-btn');
        $('.banner__title').addClass('animate-header');
    };   
    

    

    /* Image Lazy Load
    const images = document.querySelectorAll('[data-src]');
    //console.log(images);

    function preloadImage(img) {
        const src = img.getAttribute('data-src');
        if (!src)
            return;
        
        img.src = src;
    }
    
    const imgOptions = {
        threshold: 0,
    }

    const imgObserver = new IntersectionObserver((entries, imgObserver) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            }
            else {
                preloadImage(entry.target);
                imgObserver.unobserve(entry.target);
            }
        })
    }, imgOptions);

    images.forEach(image => {
        imgObserver.observe(image);
    })
*/
    /* smooth scroll */
    



});