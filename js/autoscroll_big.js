$('#accordion').on('shown.bs.collapse', function () {
 var panel = $(this).find('.in');
 $('html, body').animate({ scrollTop: panel.offset().top-125 }, 500);
 });
 
 $('#accordion2').on('shown.bs.collapse', function () {
 var panel = $(this).find('.in');
 $('html, body').animate({ scrollTop: panel.offset().top-125 }, 500);
 });
 
 $('#accordion3').on('shown.bs.collapse', function () {
 var panel = $(this).find('.in');
 $('html, body').animate({ scrollTop: panel.offset().top-125 }, 500);
 });
