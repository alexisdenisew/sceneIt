var isRed = true;


function changeColor() {
    var sphere = document.getElementById("sphere");
    sphere.setAttribute("color", "purple");
    if (isRed) {
        sphere.setAttribute("color", "purple");
        isRed = false;
    }
    else {
        sphere.setAttribute("color", "tomato");
        isRed = true;
    }
}

function addTorus() {
    for(var i = 0; i<50; i++){
    var x = Math.floor(Math.random() * 5);
    var y = Math.floor(Math.random() * 5);
    var z = Math.floor(Math.random() * -5);
    var newTor = document.createElement("a-torus-knot");
    newTor.setAttribute("position", ` ${x} ${y} ${z}`);
    newTor.setAttribute("scale", "0.25 0.25 0.25");
    document.getElementById("scene").appendChild(newTor);
    }
}
