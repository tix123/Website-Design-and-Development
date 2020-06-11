
var clientarray;
var xhr = new XMLHttpRequest();
window.onload=init;

function init()
{
	var current_date = new Date();
	document.getElementById('current_date').innerHTML = current_date;

	document.getElementById("search_last_name").addEventListener("keyup",function(){serachLastname(this.value);},false);

	xhr.onreadystatechange = function()
	{
		if (xhr.readyState == 4 && xhr.status == 200)
		{
			clientarray = JSON.parse(xhr.responseText);
			//displayAllClients()
		}
	};
	xhr.open("GET","rentalclients.json",true);
	xhr.send();
}

function serachLastname(last_name)
{
	var output="";
	for(var i = 0; i < clientarray.length; i++)
	{
		if(clientarray[i].last_name.toUpperCase().startsWith(last_name.toUpperCase()))
		{
			output += "<input type='radio' name='client' value='" + i + "' onchange='displayClientInfo(this.value);'>";
			output += clientarray[i].first_name;
			output += " ";
			output += clientarray[i].last_name;
			output += "<br>";
		}
	}
	document.getElementById("client_info").innerHTML = output;
}

function displayClientInfo(i)
{
	document.getElementById('Compact').disabled = false;
	document.getElementById('Mid-size').disabled = false;
	document.getElementById('Luxury').disabled = false;
	document.getElementById('Van/Truck').disabled = false;
	document.getElementById('roof_rack').disabled = false;
	document.getElementById('bicycle_rack').disabled = false;
	document.getElementById('gps').disabled = false;
	document.getElementById('child_seat').disabled = false;
	document.getElementById('days').disabled = false;
	document.getElementById('rent_button').disabled = false;

	document.getElementById('last_name').value = clientarray[i].last_name;
	document.getElementById('first_name').value = clientarray[i].first_name;
	document.getElementById('address').value = clientarray[i].address;
	document.getElementById('state_prov').value = clientarray[i].state_prov;
	document.getElementById('email').value = clientarray[i].email;
	document.getElementById('phone').value = clientarray[i].phone;

}

function rent()
{
	var output = "";
	var total_price = parseInt(0);
	var rack_price = parseInt(0);
	var rent_days = parseInt(0);


	//Client Infomation
	output += "Client Infomation:\n";
	output += "    " + document.getElementById('first_name').value;
	output += " " + document.getElementById('last_name').value + "\n";
	output += "    " + document.getElementById('address').value + ",";
	output += " " + document.getElementById('state_prov').value + "\n";
	output += "    " + document.getElementById('email').value + "\n";
	output += "    " + document.getElementById('phone').value + "\n";
	output += "\n";

	//Rental Information
	output += "Rental Infomation:\n";
	output += "    " + document.querySelector('input[name=car_type]:checked').id;

	var days = document.getElementById('days').value;
	var car_price = document.querySelector('input[name=car_type]:checked').value;
	output += " $" + (car_price * days).toFixed(2) + "\n";
	total_price += (car_price * days);

	if(document.querySelector('input[id=roof_rack]:checked'))
	{
		output += "    Roof Rack $" + (5 * days).toFixed(2) + "\n";
		total_price +=  5 * days;
	}

	if(document.querySelector('input[id=bicycle_rack]:checked'))
	{
		output += "    Bicycle Rack $" + (5 * days).toFixed(2) + "\n";
		total_price +=  5 * days;
	}

	if(document.querySelector('input[id=gps]:checked'))
	{
		output += "    GPS $10.00\n";
		total_price += 10;
	}

	if(document.querySelector('input[id=child_seat]:checked'))
	{
		output += "    Child Seat $0.00\n";
	}

	output += "\n";
	output += "Total price: $" + total_price.toFixed(2);
	alert(output);
}









