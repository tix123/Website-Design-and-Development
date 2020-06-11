
function sheet_cake_form()
{
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{
		if (xhr.readyState == 4 && xhr.status == 200)
		{
			document.getElementById("cake_type").innerHTML = xhr.responseText;
		}
	};
	xhr.open("GET", "sheetcake.html", true);
	xhr.send();
}

function round_cake_form()
{
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function()
	{
		if (xhr.readyState == 4 && xhr.status == 200)
		{
			document.getElementById("cake_type").innerHTML = xhr.responseText;
		}
	};
	xhr.open("GET", "roundcake.html", true);
	xhr.send();
}

function order()
{
	//Customer information
	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var address = document.getElementById('address').value;
	var postal = document.getElementById('postal').value;
	var phone = document.getElementById('phone').value;
	var email = document.getElementById('email').value;
	var cake_result = parseFloat(0);
	var cakeinfo = "";
	var toppings_info = "";
	var total = parseFloat(0);
	
	if(document.querySelector('input[name=cake_types]:checked').value == "sheet_cakes")
	{
		var sheet_cakes_length = document.getElementById('sheet_cakes_length').value;
		var sheet_cakes_width = document.getElementById('sheet_cakes_width').value;
		var sheet_cakes_layer = document.getElementById('sheet_cakes_layer').value;
		cake_result = ((((sheet_cakes_length*sheet_cakes_width) - 900)*0.02) + 18) * (1+ (sheet_cakes_layer-1)*0.5);
		
		cakeinfo = "Sheet cake " + sheet_cakes_length + " cm x " + sheet_cakes_width + " cm"
					+ " with " + sheet_cakes_layer + " layer(s): $" + cake_result.toFixed(2);
		total += cake_result;
	}
	else
	{
		var round_cakes_radius = document.getElementById('round_cakes_radius').value
		var round_cakes_layer = document.getElementById('round_cakes_layer').value
		cake_result = ((((round_cakes_radius*round_cakes_radius*3.14) - 707) *0.02) + 15) * (1 + (round_cakes_layer-1)*0.5);
		cakeinfo = "Round Cake " + round_cakes_radius + " cm "
					+ " with " + round_cakes_layer + " layer(s): $" + cake_result.toFixed(2);
		total += cake_result;
	}
	
	if(document.querySelector('input[name=cream_cheese_icing]:checked'))
	{
		toppings_info += "Cream Cheese icing: " + parseFloat(document.querySelector('input[name=cream_cheese_icing]:checked').value).toFixed(2) + "\n";
		total += parseFloat(document.querySelector('input[name=cream_cheese_icing]:checked').value);
	}	
	if(document.querySelector('input[name=fruit_and_almonds_topping]:checked'))
	{
		toppings_info += "Fruit and Almonds topping: " + parseFloat(document.querySelector('input[name=fruit_and_almonds_topping]:checked').value).toFixed(2) + "\n";
		total += parseFloat(document.querySelector('input[name=fruit_and_almonds_topping]:checked').value);
	}
	if(document.querySelector('input[name=fruit_jam_filling_between_layers]:checked'))
	{
		toppings_info += "Fruit jam filling between layers: " + parseFloat(document.querySelector('input[name=fruit_jam_filling_between_layers]:checked').value).toFixed(2) + "\n";
		total += parseFloat(document.querySelector('input[name=fruit_jam_filling_between_layers]:checked').value);
	}
	
	
	confirm(+ firstname + " " + lastname + "\n"
			+ address + "\n"
			+ postal + "\n"
			+ phone + "\n"
			+ email + "\n"
			+ "\n"
			+ "Your order:\n"
			+ "\n"
			+ cakeinfo + "\n"
			+ toppings_info
			+ "\n"
			+ "Total Cost: $" + total.toFixed(2) + "\n"
			+ "\n"
			+ "Do you confirm to send this order?");

}






