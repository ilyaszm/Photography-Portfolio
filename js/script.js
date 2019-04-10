//  ANIMATE SMOOTH SCROLLING
$('#view-work').on('click', function () {

    const images = $('#images').position().top;
    $('html, body').animate({
        scrollTop: images
    }, 900);
    
});

$('#portfolio-link').on('click', function () {

    const images = $('#images').position().top;
    $('html, body').animate({
        scrollTop: images
    }, 900);
    
});

$('#contact-link').on('click', function () {

    const contact = $('#footer').position().top;
    $('html, body').animate({
        scrollTop: contact
    }, 900);
    
});

$('#up').on('click', function () {

    const landing = $('#landing').position().top;
    $('html, body').animate({
        scrollTop: landing
    }, 900);
    
});