


function setup() {
    createCanvas(windowWidth, windowHeight);
}


function draw() {
    clear();
    line(windowWidth, windowHeight, mouseX, mouseY);
    line(windowWidth, 300, mouseX, mouseY);
    line(650, windowHeight, mouseX, mouseY);
    line(0, 0, mouseX, mouseY);
    // line(0, 0, mouseX, mouseY);
    // line(0, 0, mouseX, mouseY);
}