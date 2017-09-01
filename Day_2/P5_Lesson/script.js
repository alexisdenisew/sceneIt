//Name
//Input
//Code
//Output

function setup(){
    // code block preforms some action to create output
    createCanvas(1000, 1000)
}

function draw(){
    //3 cirlces, 2 for eyes, one for face
    //6 ines for eyelashes
    //1 half circle for smile
    fill("pink");
    ellipse(700, 650, 450, 550);
    line(550, 445, 550, 200);
    line(850, 445, 850, 300);
    ellipse(850, 275, 100, 100);
    ellipse(550, 150, 100, 100);
    arc(700, 700, 150, 250, 0, 91.1);
}
