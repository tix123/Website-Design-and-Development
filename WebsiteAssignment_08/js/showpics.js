


window.addEventListener("load", listeners, false);
var asynchrequest;

function listeners()
{
    document.getElementById("caption1").addEventListener("mouseover", function () { getContent("p1.html");}, false);
    document.getElementById("caption1").addEventListener("mouseout", clearContent, false);

    document.getElementById("caption2").addEventListener("mouseover", function () { getContent("p2.html");}, false);
    document.getElementById("caption2").addEventListener("mouseout", clearContent, false);

    document.getElementById("caption3").addEventListener("mouseover", function () { getContent("p3.html");}, false);
    document.getElementById("caption3").addEventListener("mouseout", clearContent, false);

    document.getElementById("caption4").addEventListener("mouseover", function () { getContent("p4.html");}, false);
    document.getElementById("caption4").addEventListener("mouseout", clearContent, false);

    document.getElementById("caption5").addEventListener("mouseover", function () { getContent("p5.html");}, false);
    document.getElementById("caption5").addEventListener("mouseout", clearContent, false);

    document.getElementById("caption6").addEventListener("mouseover", function () { getContent("p6.html");}, false);
    document.getElementById("caption6").addEventListener("mouseout", clearContent, false);

    document.getElementById("caption7").addEventListener("mouseover", function () { getContent("p7.html");}, false);
    document.getElementById("caption7").addEventListener("mouseout", clearContent, false);

    document.getElementById("caption8").addEventListener("mouseover", function () { getContent("p8.html");}, false);
    document.getElementById("caption8").addEventListener("mouseout", clearContent, false);
}

function getContent(picspage)
{
    asynchrequest= new XMLHttpRequest();
    asynchrequest.onreadystatechange = function() {
        if (asynchrequest.readyState == 4 && asynchrequest.status == 200) {
            document.getElementById("pics").innerHTML = asynchrequest.responseText;
        }
    };
    asynchrequest.open("GET", picspage, true);
    asynchrequest.send();
}

function clearContent()
{
    document.getElementById("pics").innerHTML="";
}