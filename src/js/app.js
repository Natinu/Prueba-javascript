$(document).ready(function(){
	$(".sidebar__form").on('submit', function(e){
		var user = $(".sidebar__form--cajausuario").val();
		var text = $(".sidebar__form--cajadetexto").val();
		var contador = $("#contador--like").text();

		event.preventDefault();
		$(".main__central").prepend(
			'<div class="main__tweet">'
			+'<div class="main__tweet--pin">'
			+'<i class="fas fa-times"></i>'
			+'</div>'
			+'<div class="usuario">'
			+ user
			+ '</div>'
			+ text 
			+'<div class="main__tweet--features">'
			+'<a class="main__like href= # ">'
			+'<i class="fas fa-heart"></i>'  + ' ' 
			+'</a>'
			+'<div class="main__contador">0</label>'
			+'</div>'
			+'</div>'
			+'</div>'
			+'</div>')
		$(".sidebar__form--cajausuario").val('');
		$(".sidebar__form--cajadetexto").val('');
		$(".sidebar__form--cajadetexto").focus();
		e.preventDefault();


	}); 

// Borrar Tweet
$(".main__central").on('click', '.main__tweet--pin', function(e){
	event.stopPropagation();
	$(this).parent().fadeOut(900);
});

// Like corazón
$(".main__central").on('click', '.main__like', function(e){
	e.stopPropagation();
		$(this).addClass('main__like--red');
});


// Contador (HACER DELEGACION)
var contador = 0;
 $('.main__central').on('click', '.main__like', function(e){ 
    var contador = $(this).siblings().text();
    contador = parseInt(contador);
    contador = contador + 1;
    console.log(contador);
       
 	$(this).siblings().text(contador);
 });

// Cargar imágen

$(function() {
  $('#file-input').change(function(e) {
      addImage(e); 
     });

     function addImage(e){
      var file = e.target.files[0],
      imageType = /image.*/;
    
      if (!file.type.match(imageType))
       return;
  
      var reader = new FileReader();
      reader.onload = fileOnload;
      reader.readAsDataURL(file);
     }
  
     function fileOnload(e) {
      var result=e.target.result;
      $('#imgSalida').attr("src",result);
     }
    });




});