//Hex table to be able to convert hexadecimal in decimal
const hexTable = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

//converts a color in hex format #RRGGBB (without the #) to the RGB format R, G, B
const hexToRGB = hex => {
    
    if (hex.length !== 6) {
        return 'You entered an incorrect format, please enter your value like this "RRGGBB" without any #, if you tried to enter an RGB value, use the correct format "RRR, GGG, BBB" including commas';
    }

    //separates R, G an B 
    rHex = hex.slice(0, 2);
    gHex = hex.slice(2, 4);
    bHex = hex.slice(4, 6);

    //converts each hex value in a decimal format
    const convert = string => {
        return hexTable.indexOf(string[0]) * 16**1 + hexTable.indexOf(string[1]) * 16**0;
    }

    rRGB = convert(rHex);
    gRGB = convert(gHex);
    bRGB = convert(bHex);

    return `${rRGB}, ${gRGB}, ${bRGB}`;
}

//converts a color in RGB format XXX, XXX, XXX to a color in hex format #RRGGBB (without the #)
const RGBToHex = rgb => {

    //deletes whitespaces and commas
    rgb = rgb.replace(/\s/g, '').replace(/,/g, '');

    if (rgb.length !== 9) {
        return `You entered an incorrect format, please ensure that you use the correct format "RRR, GGG, BBB"`;
    }

    //separates R, G an B 
    rRGB = rgb.slice(0, 3);
    gRGB = rgb.slice(3, 6);
    bRGB = rgb.slice(6, 9);

    //reverses a string
    reverseString = str => {
        return str.split('').reverse().join('');
    }

    //converts each decimal value into an hex format
    const convert = string => {

        let dividend = 1;
        let result = '';
        let quotient = string;
        
        while (dividend >= 1 ) {
            dividend = Math.trunc(quotient / 16);
            let remainder = quotient % 16;
            result += hexTable[remainder];
            quotient = dividend;
        }
        //Add a 0 in case the value is < 15
        if (result.length < 2) {
            result += '0';
        }
        return reverseString(result)
    }

    rHEX = convert(rRGB);
    gHEX = convert(gRGB);
    bHEX = convert(bRGB);

    return(rHEX + gHEX + bHEX);
}

//auto-detects the format and executes the corresponding function 
const autoConversion = color => {
    
    if (color.includes(',')) {
        return RGBToHex(color);
    }

    else {
        return hexToRGB(color);
    }
}