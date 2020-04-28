function validation (){
	var name = document.getElementById("name").value;
	var eveniment = document.getElementById("eveniment").value;
	var telefon = document.getElementById("telefon").value;
	var data = document.getElementById("data").value;
	var mail = document.getElementById("mail").value;
	var locatie = document.getElementById("locatie").value;
	var facebook = document.getElementById("facebook").value;
	var poveste = document.getElementById("poveste").value;
	var error_message = document.getElementById("error_message");
	var text;

	error_message.style.padding = "12px";

	if(name.length <5){
		text = "Te rog să introduci un nume valid!";
		error_message.innerHTML = text;
		return false;
	}

	if(eveniment.length <5){
		text = "Te rog să introduci tipul evenimentului!";
		error_message.innerHTML = text;
		return false;
	}
	
	if(isNaN(telefon) || telefon.length < 10){
		text = "Te rog să introduci un număr valid!";
		error_message.innerHTML = text;
		return false;
	}

	if(data.length <8){
		text = "Te rog să introduci o dată validă!";
		error_message.innerHTML = text;
		return false;
	}

	if(mail.indexOf("@") == -1 || mail.length <6){
		text = "Te rog să introduci o adresă de e-mail validă!";
		error_message.innerHTML = text;
		return false;
	}

	if(locatie.length <4){
		text = "Te rog să introduci locația!";
		error_message.innerHTML = text;
		return false;
	}

	if(facebook.length <10){
		text = "Te rog să introduci profilul facebook!";
		error_message.innerHTML = text;
		return false;
	}

	if(poveste.length <= 120){
		text = "Te rog să povestești mai mult!";
		error_message.innerHTML = text;
		return false;
	}

	alert("Mesajul a fost trimis cu succes, voi reveni în cel mai scurt timp cu un răspuns.")

		return true;
}