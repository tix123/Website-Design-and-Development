
function metre_to_foot(input_value)
{
	document.getElementById("foot").value = (input_value*3.281).toFixed(2);
}

function foot_to_metre(input_value)
{
	document.getElementById("metre").value = (input_value*0.305).toFixed(2);
}

function centimetre_to_inch(input_value)
{
	document.getElementById("inch").value = (input_value*0.394).toFixed(2);
}

function inch_to_centimetre(input_value)
{
	document.getElementById("centimetre").value = (input_value*2.54).toFixed(2);
}

function kilogram_to_pound(input_value)
{
	document.getElementById("pound").value = (input_value*2.2).toFixed(2);
}

function pound_to_kilogram(input_value)
{
	document.getElementById("kilogram").value = (input_value*0.454).toFixed(2);
}

function litre_to_gallon(input_value)
{
	document.getElementById("gallon").value = (input_value*0.22).toFixed(2);
}

function gallon_to_litre(input_value)
{
	document.getElementById("litre").value = (input_value*4.546).toFixed(2);
}
