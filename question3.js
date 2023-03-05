/* Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. */

const hexToRGB = (hex) => {
    //We delete # if it has been entered 
    if (hex[0] === "#") {
        hex = hex.slice(1);
    }

    //we check if the hex entered is correct 
    if (hex.length !== 6) {
        return "The value is not correct";
    }

    //We separate every value accordingly, in an hex color, the first 2 number are for Red, the 2nd next are for Green and the last two numbers are for Blue 
    let hexR = hex.slice(0, 2);
    let hexG = hex.slice(2, 4);
    let hexB = hex.slice(4);

    //partInt(X, 16) allows to convert an Hexadecimal value to a decimal value 
    let R = parseInt(hexR, 16);
    let G = parseInt(hexG, 16);
    let B = parseInt(hexB, 16);

    return `#${hex} is ${R}, ${G}, ${B} in RGB`
}

const RGBToHex = (r, g, b) => {
    //We check if the value entered are correct (0 < x < 255)
    if (((r.length || g.length || b.length) > 3) || ((r || g || b) > 255) || ((r || g || b) < 0) ) {
        return "The value entered is not correct"
    }

    //We take every value and convert it to an Hex 
    let rHex = r.toString(16);
    let gHex = g.toString(16);
    let bHex = b.toString(16);

    //add a 0 at the beginning of an hex if needed
    const padding = (hex) => {
        let hexPadded = hex;
        if (hex.length === 1) {
            hexPadded = hex.padStart(2, "0");
        }
        return hexPadded;
    }

    rHex = padding(rHex);
    gHex = padding(gHex);
    bHex = padding(bHex);

    return `${r}, ${g}, ${b} is #${rHex}${gHex}${bHex} in HEX`;
}

const answer = (value) => {
    //If the value entered contains #, it's a hex, and if it has a length of 6 and doesn't include ",", it's an hex too 
    if ((value[0] === "#") || (value.length === 6 && !value.includes(","))) {
        return hexToRGB(value);
    } else if (value.includes(",") && value.includes(" ")) { //if it includes "," and " ", it's an RGB but we need to clean it in order to be accepted in RGBTohex 
        value = value.replaceAll(" ", "");
        let rgb = value.split(",");
        //we get every colour from the rgb array, allowing us to directly call RGBToHex with these
        let r = Number(rgb[0]);
        let g = Number(rgb[1]);
        let b = Number(rgb[2]);
        return RGBToHex(r, g, b);
    } else if (value.includes(",") || value.includes(" ")) { //if it includes "," or " ", we just need to split the string accordingly, the result will be stored in rgb
        let rgb;
        if (value.includes(",")) {
            rgb = value.split(",");
        } else if (value.includes(" ")) {
            rgb = value.split(" ");
        }
        //same as above 
        let r = Number(rgb[0]);
        let g = Number(rgb[1]);
        let b = Number(rgb[2]);
        return RGBToHex(r, g, b);
    } 
}