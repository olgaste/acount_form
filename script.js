$(document).ready(function() {
	$('#username').keyup(function() {
		if (this.value !='') {
			$('#tel').show();
		}
	});
	
	$('#tel').keyup(function() {
		if (this.value !='') {
			$('#email').show();
		}
	});
	
	$('#email').keyup(function() { 
		if (this.value !='') {
			$('#password').show();
		}
	});
	
	$('#password').keyup(function() {
		if (this.value !='') {
			$('.checkbox').show();
		}
	});
	
	$('.checkbox').click(function() {
		if (this.value !='') {
			$('input:submit').show();
		}
	});

	$('form').submit(function(event) {
		event.preventDefault();
		$('.block').hide();
		$('.greetings').css('display', 'block');
		var username = $ ('#username').val();
		$('.greetings').append('<h2>' + username + '!' + '</h2>');
	})

	$('input:not(:last-child)').blur(function() {
		if (this.value == ''){
			$('.message').show();
			$('input:not(:last-child)').css('border', '2px solid red').css('color', 'red');
		} else {
			$('.message').hide();
			$('input:not(:last-child)').css('border', '').css('color', '');
		}
	});
});


	
	
	

    


	
    	
	






