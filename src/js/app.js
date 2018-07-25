$(document).ready(function(){
	$(".sidebar__form").on('submit', function(e){
		var text = $(".sidebar__form--cajadetexto").val();
		event.preventDefault();
		$(".main-central").append(
			'<div class="main__row row col-md 12">'
			+'<div class="main__tweet">'
			+'<div class="main__tweet--pin">'
			+'<i class="fas fa-times"></i>'
			+'</div>'
			+ text
			+'<div class="main__tweet--features">'
			+'<i class="fas fa-heart"></i>'
			+'</div>'
			+'</div>'
			+'</div>')


	}); 

$(".main__tweet--pin").on('click', function(){
	alert("borrando pin");

})


});