function throwMarker(person, color, landingPosition) {

    var binPosition = 100;

    if (landingPosition == binPosition) {
        return `Yay, ${person} made the ${color} marker in the bin!`;
    }
    else {
        return `Boo, ${person} did not make the ${color} marker in the bin!`;
    }

    else if (landingPosition < binPosition) {
        return `${person} undershot :(`
    }
    
    else {
        return `${person} overshot :(`
    }


    console.log(throwMarker("Marley", "red", 99));

    console.log(throwMarker("Liz", "Green", 100));
}
