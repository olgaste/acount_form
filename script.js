$(document).ready(function() {
	$('#username').keydown(function() {
  		$('#tel').show(function() {
    	});
    		if (this.value == this.defaultValue){
			this.value = '';
			}
	});
	
	$('#tel').keydown(function() {
  		$('#email').show(function() {
    	});
    		if (this.value == this.defaultValue){
			this.value = '';
			}
	});
	
	$('#email').keydown(function() { 
		$('#password').show(function() {
    	});
    		if (this.value == this.defaultValue){
			this.value = '';
			}
	});
	
	$('#password').keydown(function() {
  		$('.checkbox').show(function() {
    	});
    		if (this.value == this.defaultValue){
			this.value = '';
			}
	});
	
	$('.checkbox').click(function() {
  		$('input:submit').show(function() {
    	});
    		if (this.value == this.defaultValue){
			this.value = '';
			}
	});

	$('input:not(:last-child)').blur(function() {
		$('.message').show(function() {
    	});
			$('input:not(:last-child)').css('border', '2px solid red').css('color', 'red')
  	});
});


	
	
	

    


	
    	
	






