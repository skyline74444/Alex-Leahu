$(function() {
	//Scroll fucntion
	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#toTop').fadeIn();
		} else {
			$('#toTop').fadeOut();
		}
	});
	//Button To Top function
	$('#toTop').click(function() {
		$('body,html').animate({scrollTop:0},1200);
	});
	//To Id's function
	$('.topBottom').click(function() {
		$('body,html').animate({scrollTop: $(document).height()}, 2500);
	});
	$('a[href="#about"]').click(function() {
	    $('html, body').animate({
	        scrollTop: $("#about").offset().top
	    }, 2000);
	});
	$('a[href="#why_me"]').click(function() {
	    $('html, body').animate({
	        scrollTop: $("#why_me").offset().top
	    }, 2000);
	});
	$('a[href="#services"]').click(function() {
	    $('html, body').animate({
	        scrollTop: $("#services").offset().top
	    }, 2000);
	});
	$('a[href="#skills"]').click(function() {
	    $('html, body').animate({
	        scrollTop: $("#skills").offset().top
	    }, 2000);
	});
	$('a[href="#projects"]').click(function() {
	    $('html, body').animate({
	        scrollTop: $("#projects").offset().top
	    }, 2000);
	});
	$('a[href="#contact"]').click(function() {
	    $('html, body').animate({
	        scrollTop: $("#contact").offset().top
	    }, 2000);
	});
});

$(document).ready(function(){
    $('#nav-toggle').click(function(){
        $('#nav-toggle').toggleClass('active');
    });
});
//Number goes up function
$('.count').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//Header fixed function
$(window).scroll(function() {
    if($(this).scrollTop()>70){
        $('.home').addClass('header_fixed');
    } else {
        $('.home').removeClass('header_fixed');
    }
});
//E-mail Ajax Send
$(document).ready(function(){
	$("form.flex-input").submit(function(){
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "form.php",
			data: th.serialize()
		}).done(function(){
			$(th).find('.succes').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function(){
				$(th).find('.succes').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});
});
//Slieder for h1 content
$('.slider_h1').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: false,
    arrows: false
});
// Get the modal
var img = document.getElementById('myImg');
var modal = document.getElementById('myModal');
var modalImg = document.getElementById("img01");
img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close_btn")[0];
// When the user clicks on <span> (x), close the modal
/*span.onclick = function() { 
	modal.style.display = "none";
}*/
//pop up
/*
$(document).ready(function(){
	$('#popup').setInterval(function(){
		.
	}, 3000);
}*/