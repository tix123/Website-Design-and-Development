
var xmldoc;
var xhr = new XMLHttpRequest();
window.onload=init;

function init()
{

 xhr.onreadystatechange = function()
 {
   if (xhr.readyState == 4 && xhr.status == 200)
   {
       xmldoc = xhr.responseXML;
       displayQuiz();
   }
 };
xhr.open("GET","finalquiz.xml",true);
xhr.send();
}

function displayQuiz()
{
    var output ="";
    output += "<tr>";
    output += "<td id='quiz_title'>Final Quiz</td>";
    output += "</tr>";

    output += "<tr>";
    output += "<td><hr></td>";
    output += "</tr>";

    var question = xmldoc.getElementsByTagName("question");
    for (var i = 0; i < question.length; i++)
    {
        //Question
        output += "<tr><th>Question " + question[i].getElementsByTagName("qnumber")[0].childNodes[0].nodeValue + ":</th></tr>";
        output += "<tr><td><br></td></tr>"
        output += "<tr><td>" + question[i].getElementsByTagName("qtitle")[0].childNodes[0].nodeValue + "</td></tr>";
        output += "<tr><td><br></td></tr>"

        //Answer
        output += "<tr><td><input type='radio' name='answer" + question[i].getElementsByTagName("qnumber")[0].childNodes[0].nodeValue + "' id='a'> A) ";
        output +=  question[i].getElementsByTagName("a")[0].childNodes[0].nodeValue + "</td></tr>";
        output += "<tr><td><input type='radio' name='answer" + question[i].getElementsByTagName("qnumber")[0].childNodes[0].nodeValue + "' id='b'> B) ";
        output +=  question[i].getElementsByTagName("b")[0].childNodes[0].nodeValue + "</td></tr>";
        output += "<tr><td><input type='radio' name='answer" + question[i].getElementsByTagName("qnumber")[0].childNodes[0].nodeValue + "' id='c'> C) ";
        output +=  question[i].getElementsByTagName("c")[0].childNodes[0].nodeValue + "</td></tr>";
        output += "<tr><td><input type='radio' name='answer" + question[i].getElementsByTagName("qnumber")[0].childNodes[0].nodeValue + "' id='d'> D) ";
        output +=  question[i].getElementsByTagName("d")[0].childNodes[0].nodeValue + "</td></tr>";

        output += "<tr><td><br></td></tr>"

        output += "<tr>";
        output += "<td><hr></td>";
        output += "</tr>";
    }
    output += "<tr>";
    output += "<td id='button'><input type='button' value='Grade Quiz' onclick='grade();' id='grade_quiz_button'></td>";
    output += "</tr>";

    document.getElementById("final_quiz").innerHTML = output;
}

function grade()
{
    var correctAnswer = parseInt(0);
    var question = xmldoc.getElementsByTagName("question");
    var rightanswers = xmldoc.getElementsByTagName("rightanswers")[0].childNodes[0].nodeValue;
    var rightAnswerArray = rightanswers.split(",");

    for (var i = 0; i < question.length; i++)
    {
        var answerName = "answer" + question[i].getElementsByTagName("qnumber")[0].childNodes[0].nodeValue;

        if (rightAnswerArray[i] == document.querySelector('input[name=' + answerName + ']:checked').id)
        {
            correctAnswer++;
        }
    }
    alert("Your grade: " + correctAnswer + "/" + question.length);

}
