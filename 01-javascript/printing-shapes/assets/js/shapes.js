// PART 2
function getLine(length) {
    // TODO - write method definition here
    var i = 0;
    var str = "";
    while (i < length) {    // loop through length
        str += "*";
        i++;
    }
    return str;
}


// PART 3
function getBox(width, height) {
    // TODO - write method definition here
    var str = "";
    for (var i = 0; i < height; i++) {      // loop through height
        for (var j = 0; j < width; j++) {   // loop through width
            if (j == width - 1) {           // if (it hit the end of width)
                str += "* \n";              // then line break
            } else {                        // else
                str += "*";                 // just add * into str
            }
        }
    }
    return str;
}


// PART 6
function getBottomLeftTriangle(length) {
    // TODO - write method definition here
    var str = "";
    for (var i = 1; i <= length; i++) {     // loop horizontal
        for (var j = 1; j <= i; j++) {      // loop vertical --> where it ends at column i
            str += "*";
        }
        str += "\n";
    }
    return str;
}

// PART 7
function getUpperLeftTriangle(length) {
    // TODO - write method definition here
    var str = "";
    for (var i = 1; i <= length; i++) {         // loop horizontal --> where it go from 
        for (var j = length - i; j >= 0; j--) { // loop vertical --> where it go from bottomw to top
            str += "*";
        }
        str += "\n";
    }
    return str;
}



function getPyramid(length) {
    // TODO - write method definition here
    var str = "";
    for (var i = 1; i <= length; i++) {             // loop horizontal (y-axis) --> top to bottom
        for (var k = 1; k <= (length - i); k++) {   // loop vertically (x-axis) till space = length - index 
            str += " ";                             // add space
        }
        for (var j = 1; j <= (2*i - 1); j++) {      // loop vertically (x-axis) till twice size of current index - 1  
            str += "*";                             // add *
        }
        str += "\n";
    }
    return str;
}


function getCheckerboard(width, height) {
    // TODO - write method definition here
    var str = "";
    for (var i = 0; i < height; i++) {             // loop horizontal (y-axis) --> top to bottom
        for (var j = 0; j < width; j++) {
            if ((i + j) % 2 == 0) {                // if w h are both added to be even number
                str += " ";
            } else {
                str += "*";
            }
        }
        str += "\n";
    }
    return str;
}
