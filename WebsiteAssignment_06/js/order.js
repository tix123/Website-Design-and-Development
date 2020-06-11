
window.onload = init;

function init()
{
	var current_date = new Date();
	document.getElementById('current_date').innerHTML = current_date;
	var customername = getCookie("customername");
	var lastvisit = getCookie("lastvisit");
	if(customername=="")
	{
		document.getElementById('welcome').innerHTML = "Welcome New Customer!";
	}
	else
	{
		document.getElementById('welcome').innerHTML = "Welcome back " + customername + ". Your last visit was " + lastvisit;
	}
}

function setCookie(firstname,lastname)
{
	var customername = "customername=" + firstname + " " + lastname;
	var currentDate = new Date();
	var lastvisit = "lastvisit=" + currentDate.toUTCString();
	var expireDate = new Date();
	expireDate.setTime(currentDate.getTime()+(365*86400));
	var expires = "expires=" + expireDate.toUTCString();
	document.cookie = lastvisit + ";" + expires + ";path=/";
	document.cookie = customername + ";" + expires + ";path=/";
}

function getCookie(name) {
	var decodedCookie = decodeURIComponent(document.cookie);
	var cookieArray = decodedCookie.split(';');
	for(var i = 0; i < cookieArray.length; i++)
	{
		var cookie = cookieArray[i];
		while (cookie.charAt(0) == ' ')
		{
			cookie = cookie.substring(1);
		}
		if (cookie.indexOf(name) == 0)
		{
			return cookie.substring(name.length+1, cookie.length);
		}
	}
	return "";
}


/*
 * http://www.w3schools.com/js/js_cookies.asp

function getCookie(cookieName) {
	var name = cookieName + "=";
	var decodedCookie = decodeURIComponent(document.cookie);

	var ca = decodedCookie.split(';');

	for(var i = 0; i < ca.length; i++) {
		var c = ca[i];
		while (c.charAt(0) == ' ') {
			c = c.substring(1);
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}
*/

function order()
{
	//Customer Information;
	var firstname = document.getElementById('firstname').value;
	var lastname = document.getElementById('lastname').value;
	var address = document.getElementById('address').value;
	var phone = document.getElementById('phone').value;

	//Set cookies
	setCookie(firstname, lastname);

	//Pizza
	var plzza_flavor = document.querySelector('input[name=flavor]:checked').value;
	var plzza_size = document.querySelector('input[name=size_price]:checked').id;
	var plzza_price = document.querySelector('input[name=size_price]:checked').value;
	var plzza_qty = document.getElementById('pizza_qty').value;
	var total_plzza_price = parseFloat(plzza_price) * parseFloat(plzza_qty);



	//Extra toppings
	var total_extra_topping = "";
	var total_extra_topping_price = parseFloat(0);
	if(document.querySelector('input[name=extra_cheese]:checked'))
	{
		total_extra_topping += "Extra: " + document.querySelector('input[name=extra_cheese]:checked').id + " $" + document.querySelector('input[name=extra_cheese]:checked').value + "\n";
		total_extra_topping_price += parseFloat(document.querySelector('input[name=extra_cheese]:checked').value);
	}	
	if(document.querySelector('input[name=pepperoni]:checked'))
	{
		total_extra_topping += "Extra: " + document.querySelector('input[name=pepperoni]:checked').id + " $" + document.querySelector('input[name=pepperoni]:checked').value + "\n";
		total_extra_topping_price += parseFloat(document.querySelector('input[name=pepperoni]:checked').value);
	}
	if(document.querySelector('input[name=mushrooms]:checked'))
	{
		total_extra_topping += "Extra: " + document.querySelector('input[name=mushrooms]:checked').id + " $" + document.querySelector('input[name=mushrooms]:checked').value + "\n";
		total_extra_topping_price += parseFloat(document.querySelector('input[name=mushrooms]:checked').value);
	}
	if(document.querySelector('input[name=bacon]:checked'))
	{
		total_extra_topping += "Extra: " + document.querySelector('input[name=bacon]:checked').id + " $" + document.querySelector('input[name=bacon]:checked').value + "\n";
		total_extra_topping_price += parseFloat(document.querySelector('input[name=bacon]:checked').value);
	}
	if(document.querySelector('input[name=olives]:checked'))
	{
		total_extra_topping += "Extra: " + document.querySelector('input[name=olives]:checked').id + " $" + document.querySelector('input[name=olives]:checked').value + "\n";
		total_extra_topping_price += parseFloat(document.querySelector('input[name=olives]:checked').value);
	}
	
	//Sandwich
	var sandwich_flavor = document.querySelector('input[name=sandwich]:checked').id;
	var sandwich_price = document.querySelector('input[name=sandwich]:checked').value;
	var sandwich_qty = document.getElementById('sandwich_qty').value;
	var total_sandwich_price = parseFloat(sandwich_price) * parseFloat(sandwich_qty);
	
	//drink
	var drink_flavor = document.querySelector('input[name=drink]:checked').id;
	var drink_size = document.querySelector('input[name=drink_size]:checked').id;
	var drink_price = document.querySelector('input[name=drink_size]:checked').value;
	var drink_qty = document.getElementById('drink_qty').value;
	var total_drink_price = parseFloat(drink_price) * parseFloat(drink_qty);
	
	//Total cost
	var total_cost = total_plzza_price + total_extra_topping_price + total_sandwich_price + total_drink_price;
	

	//print order items and total cost
	confirm("Your order as below:\n"
			+ "\n"
			+ firstname + " " + lastname + "\n"
			+ address + "\n"
			+ phone + "\n"
			+ "\n"
			+ plzza_qty + " " + plzza_size + " " + plzza_flavor + " Pizza $" + total_plzza_price.toFixed(2) + "\n"
			+ total_extra_topping
			+ sandwich_qty + " " + sandwich_flavor + " Sandwich $" + total_sandwich_price.toFixed(2) + "\n"
			+ drink_qty + " " + drink_size + " " + drink_flavor + " $" + total_drink_price.toFixed(2) + "\n"
			+ "\n"
			+ "Total Cost: $" + total_cost.toFixed(2) + "\n"
			+ "\n"
			+ "Do you confirm to send this order?");
	return false;
}










