$('#accordion').on('shown.bs.collapse', function () {
 var panel = $(this).find('.in');
 $('html, body').animate({ scrollTop: panel.offset().top-100 }, 500);
 });
