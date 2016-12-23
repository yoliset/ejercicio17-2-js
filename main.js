


function calcular(){
    $('#salida').removeClass("dormi-face");
    $('#salida').removeClass("despierto-face");
	var vacation = document.getElementById("vacation").value;
	var weekday = parseInt(document.getElementById("weekday").value);
    var salida = document.getElementById("salida");

	var message = "0";
    var face = "despierto-face";
	if (weekday >5 || vacation == 1){
		message = "1";
        face = "dormi-face";
        
	}
	
   //console.log(message, face)
    document.getElementById("message").innerHTML = message;
    $('#salida').addClass(face)
}
    
   
