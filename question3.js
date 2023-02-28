/* Question 3: Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX. */

const hexToRGB = (hex) => {
    //We delete # if it has been entered 
    if (hex[0] === "#") {
        hex = hex.slice(1);
    }

    if (hex.length !== 6) {
        return "The value is not correct";
    }

    let hexR = hex.slice(0, 2);
    let hexG = hex.slice(2, 4);
    let hexB = hex.slice(4);

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

    //We take every value and convert it to and Hex 
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
        let r = Number(rgb[0]);
        let g = Number(rgb[1]);
        let b = Number(rgb[2]);
        return RGBToHex(r, g, b);
    } else if (value.includes(",") || value.includes(" ")) {
        let rgb;
        if (value.includes(",")) {
            rgb = value.split(",");
        } else if (value.includes(" ")) {
            rgb = value.split(" ");
        }
        let r = Number(rgb[0]);
        let g = Number(rgb[1]);
        let b = Number(rgb[2]);
        return RGBToHex(r, g, b);
    } 
}