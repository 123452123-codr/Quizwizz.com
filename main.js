function result()
{
var score=0;
var incorrect=0;
{
if(doucment.getElementById("a1").checked)
score++;
else
incorrect++;
}
{
if(doucment.getElementById("a2").checked)
score++;
else
incorrect++;
}
{
if(doucment.getElementById("a3").checked)
score++;
else
incorrect++;
}
{
if(doucment.getElementById("a4").checked)
score++;
else
incorrect++;
}
{
if(doucment.getElementById("a5").checked)
score++;
else
incorrect++;
}
document.getElementById("scorelabel").innerHTML=(score*2);
document.getElementById("correctlabel").innerHTML=(score);
document.getElementById("incorrectlabel").innerHTML=(incorrect);
}
