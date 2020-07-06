
// $('.tabs-nav a').on('click', function (event) {
//     event.preventDefault();
    
//     $('.tab-active').removeClass('tab-active');
//     $(this).parent().addClass('tab-active');
//     $('.tabs-stage div').hide();
//     $($(this).attr('href')).show();
// });

// $('.tabs-nav a:first').trigger('click'); // Default


// $(document).ready(function(){

// 	$(".hamburgericon").click(function(){
// 		$(".menu-list").toggleClass("active");
// 	});
// });

$(document).ready(function(){
  $(".hamburgericon").click(function(){
    $(".menu-list").toggleClass("active");
  });
});