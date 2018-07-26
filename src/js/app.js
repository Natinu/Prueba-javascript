$(document).ready(function(){
	$(".sidebar__form").on('submit', function(e){
		var text = $(".sidebar__form--cajadetexto").val();
		var usuario = $(".usuario").text();
		var contador = $("#contador--like").text();

		event.preventDefault();
		$(".main__central").append(
			'<div class="main__tweet row col-md 12">'
			+'<div class="main__tweet--pin">'
			+'<i class="fas fa-times"></i>'
			+'</div>'
			+ usuario 
			+ "<br/>"
			+ text
			+'<div class="main__tweet--features">'
			+'<a class="main__like href= # ">'
			+'<i class="fas fa-heart"></i>'
			+'</a>'
			+'<div class="main__contador">'
			+'<label id="contador--like"> 0 </label>'
			+'</div>'
			+'</div>'
			+'</div>'
			+'</div>')
		$(".sidebar__form--cajadetexto").var('');
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
		$(this).toggleClass('main__like--red');
});


// Contador (HACER DELEGACION)

var contador = 0;
 $('.main__like').click(function(){ 
       
    if (contador < 1 ) { /*Cambiar el >= 0 por < 10 si quieres limitar el incremento*/
            contador++;
        } else if (contador = contador++) {
            contador = 0;
        }
 document.getElementById("contador--like").innerHTML = contador;
 })

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