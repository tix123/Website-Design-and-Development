
var xmldoc;
var xhr = new XMLHttpRequest();
window.onload=init;

function init()
{
    document.getElementById("id").addEventListener("keyup",function(){serachID(this.value);},false);
    document.getElementById("last_name").addEventListener("keyup",function(){serachLastName(this.value);},false);
    document.getElementById("job_title").addEventListener("keyup",function(){serachJobTitle(this.value);},false);

 xhr.onreadystatechange = function()
 {
   if (xhr.readyState == 4 && xhr.status == 200)
   {
       xmldoc = xhr.responseXML;
   }
 };
xhr.open("GET","dataset.xml",true);
xhr.send();
}

function serachID(id)
{
    var output ="";
    output += "<tr>";
    output += "<td colspan='6' id='list_title'>Employee Information Search by ID</td>";
    output += "</tr>";

    output += "<tr>";
    output += "<td colspan='6'><hr></td>";
    output += "</tr>";

    output += "<tr>";
    output += "<th>Last Name</th>";
    output += "<th>First Name</th>";
    output += "<th>ID</th>";
    output += "<th>Company</th>";
    output += "<th>Job Title</th>";
    output += "<th>Phone</th>";
    output += "</tr>";

    output += "<tr>";
    output += "<td colspan='6'><hr></td>";
    output += "</tr>";

    var employee = xmldoc.getElementsByTagName("employee");
    for (var i = 0; i < employee.length; i++)
    {
        if(employee[i].getElementsByTagName("id")[0].childNodes[0].nodeValue.startsWith(id)) {
            output += "<tr>";
            output += "<td>" + employee[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("id")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("company")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue + "</td>";
            output += "</tr>";
        }
    }
    document.getElementById("employee_info").innerHTML = output;
}

function serachLastName(last_name)
{
    var output ="";
    output += "<tr>";
    output += "<td colspan='6' id='list_title'>Employee Information Search by Last Name</td>";
    output += "</tr>";

    output += "<tr>";
    output += "<td colspan='6'><hr></td>";
    output += "</tr>";

    output += "<tr>";
    output += "<th>Last Name</th>";
    output += "<th>First Name</th>";
    output += "<th>ID</th>";
    output += "<th>Company</th>";
    output += "<th>Job Title</th>";
    output += "<th>Phone</th>";
    output += "</tr>";

    output += "<tr>";
    output += "<td colspan='6'><hr></td>";
    output += "</tr>";

    var employee = xmldoc.getElementsByTagName("employee");
    for (var i = 0; i < employee.length; i++)
    {
        if(employee[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue.toUpperCase().startsWith(last_name.toUpperCase())) {
            output += "<tr>";
            output += "<td>" + employee[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("id")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("company")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue + "</td>";
            output += "</tr>";
        }
    }
    document.getElementById("employee_info").innerHTML = output;
}

function serachJobTitle(job_title)
{
    var output ="";
    output += "<tr>";
    output += "<td colspan='6' id='list_title'>Employee Information Search by Job Title</td>";
    output += "</tr>";

    output += "<tr>";
    output += "<td colspan='6'><hr></td>";
    output += "</tr>";

    output += "<tr>";
    output += "<th>Last Name</th>";
    output += "<th>First Name</th>";
    output += "<th>ID</th>";
    output += "<th>Company</th>";
    output += "<th>Job Title</th>";
    output += "<th>Phone</th>";
    output += "</tr>";

    output += "<tr>";
    output += "<td colspan='6'><hr></td>";
    output += "</tr>";

    var employee = xmldoc.getElementsByTagName("employee");
    for (var i = 0; i < employee.length; i++)
    {
        if(employee[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue.toUpperCase().startsWith(job_title.toUpperCase())) {
            output += "<tr>";
            output += "<td>" + employee[i].getElementsByTagName("last_name")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("first_name")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("id")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("company")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("job_title")[0].childNodes[0].nodeValue + "</td>";
            output += "<td>" + employee[i].getElementsByTagName("phone")[0].childNodes[0].nodeValue + "</td>";
            output += "</tr>";
        }
    }
    document.getElementById("employee_info").innerHTML = output;
}
