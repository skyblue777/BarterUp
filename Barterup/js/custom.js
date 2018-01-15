$(document).ready(function(){
	$('.slider-newest').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: true,
		prevArrow: '<button type="button" class="slick-prev"></button>',
  		nextArrow: '<button type="button" class="slick-next"></button>',
  		responsive: [{
  			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
  		}]
	});

	$('#people-have').click(function() {
		location.href = "have.html";
	});

	$('#people-want').click(function() {
		location.href = "want.html";
	});

	$('#garage-sale').click(function() {
		location.href = "garage-sale.html";
	});
});

function validateForm() {
	var fname =  document.getElementById('first-name').value;
	var lname =  document.getElementById('last-name').value;

	if (fname == "" || lname == "") {
        document.getElementById('status').innerHTML = "Name cannot be empty";
        return false;
    }

    var email =  document.getElementById('email').value;
    if (email == "") {
        document.getElementById('status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.getElementById('status').innerHTML = "Email format invalid";
            return false;
        }
    }

    var subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.getElementById('status').innerHTML = "Subject cannot be empty";
        return false;
    }
    var message =  document.getElementById('message').value;
    if (message == "") {
        document.getElementById('status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.getElementById('status').innerHTML = "Sending...";
    document.getElementById('contact-form').submit();
}