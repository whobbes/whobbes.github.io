// Animations for the page

// Scrolling
$("#landing").on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});

// Menu background show
$(window).on("scroll", function() {
    if($(window).scrollTop() > 300) {
        $(".navbar").addClass("active");
    } else {
       $(".navbar").removeClass("active");
    }
});