// Animations for the page

// Scrolling
$("#landing").on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

// Auto-close menu
$('.navbar-collapse a').click(function(){
    $(".navbar-collapse").collapse('hide');
});