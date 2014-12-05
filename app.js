$(document).on('ready',function(){


	$('#get').on('click',function(){		

		$.ajax({
			url: "peticion.php",		 	
			type: 'GET',
			success: function(data) {
			    alert( data );
			}			
		})

	});	

	$('#post').on('click',function(){		

		$.ajax({
			url: "peticion2.php",		 	
			type: 'POST',
			data:{name:"adrian",lastname:"zelada"},
			success: function(data) {
			    add_element(data);
			}			
		})
	});	

	var add_element=function(data){
		var element='<div class="add_element">'+data+'</div>'

		$('#content').append(element);
	}
});