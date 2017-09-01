var isOff = true;




function changeColor() {
    var leye = document.getElementById("leftEye");
    var reye = document.getElementById("rightEye");
    leye.setAttribute("color", "yellow");
    reye.setAttribute("color", "yellow");
    isOff = false;
}



function ant1on() {
    var ant1 = document.getElementById("antenna1");
    ant1.setAttribute("rotation", "0 90 0");
    ant1.setAttribute("color", "purple");
}

function ant2on() {
    var ant2 = document.getElementById("antenna2");
    ant2.setAttribute("rotation", "0 90 0");
    ant2.setAttribute("color", "purple");
}

function hi() {
    var hello = document.createElement("a-text");
    hello.setAttribute("value", "Hi, my name is Toby");
    hello.setAttribute("position", "-1 2.6 -5.24");
    hello.setAttribute("font-family", "'Kumar One Outline', cursive")
    document.getElementById("scene").appendChild(hello);
}

function evil() {
    var leye = document.getElementById("leftEye");
    var reye = document.getElementById("rightEye");
    leye.setAttribute("color", "red");
    reye.setAttribute("color", "red");
    var mad  = document.createElement("a-text");
    mad.setAttribute("value", "Now I'm evil!");
    mad.setAttribute("position", "-2.5 4.4 -5.24");
    document.getElementById("scene").appendChild(mad);
    var mouth = document.getElementById("mouth");
    mouth.setAttribute("color", "black");
}

function grow(){
    var robo = document.getElementById("robo")
    robo.setAttribute("scale", "1 3 1");
    robo.setAttribute("position", "0 -4 -2");
}
