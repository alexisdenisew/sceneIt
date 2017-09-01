function setup() {
    createCanvas(1000, 1000)
}

function draw() {
    fill(44, 215, 42)
    noStroke()
    rect(300, 500, 100, 100)
    
   

    windows()
    
    fill(1, 42, 86)
    noStroke()
    rect(585, 500, 100, 100)
    
    cross()
    
    fill(33, 85, 158)
    noStroke()
    rect(885, 500, 100, 100)
}
    
    
    
function windows(){ 
    fill(240, 81, 33)
    rect(450, 500, 45, 45)
     fill(0, 163, 238)
    rect(450, 550, 45, 45)
    fill(126, 186, 0)
    rect(500, 500, 45, 45)
    fill(255, 185, 1)
    rect(500, 550, 45, 45)
}

function cross(){
    fill(254, 0, 0)
    rect(750, 500, 35, 100)
    rect(717, 530, 100, 35)
}



 