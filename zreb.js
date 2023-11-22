var dugme = document.getElementById("dugme");
var max = 16;
var ekipe = ["Partizan", "Crvena zvezda", "Barselona", "Bajern", "Inter", "Milan", "Real Madrid", "Arsenal", "Čelsi", "Mančester Siti", "Mančester Junajted", "Liverpul", "Juventus", "Napoli", "Atletiko Madrid", "PSG"];
dugme.addEventListener("click", zreb);
function zreb()
{
        var x = Math.floor(Math.random() * max);
        var tim = ekipe.splice(x, 1);
        max--;
        if(ekipe.length % 4 == 3) {
            document.getElementById("p1").innerHTML += "<li>" + tim;
        } else if(ekipe.length % 4 == 2) {
            document.getElementById("p2").innerHTML += "<li>" + tim;
        } else if(ekipe.length % 4 == 1) {
            document.getElementById("p3").innerHTML += "<li>" + tim;
        } else {
            document.getElementById("p4").innerHTML += "<li>" + tim;
        }
        if (max == 0) {
            dugme.removeEventListener("click", zreb);
        }
};