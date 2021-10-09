/*master code here
 if (province == 'ONTARIO') {
    rate = ONTARIO_RATE;
    amt = base * ONTARIO_RATE;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
} else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
    rate = (province == 'QUEBEC') ? QUEBEC_RATE : ALBERTA_RATE;
    amt = base * rate;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
    if (province == 'QUEBEC') {
        points = 2;
    }
} else {
    rate = 1;
    amt = base;
    calc = 2 * basis(amt) + extra(amt) * 1.05;
}*/

//refactor code
amt = base;
if (province == 'ONTARIO') {
    rate = ONTARIO_RATE;
    amt *=  ONTARIO_RATE;
} else if ((province == 'QUEBEC') || (province == 'ALBERTA')) {
    if (province == 'QUEBEC') {
        points = 2;
        rate= QUEBEC_RATE;
    }else{
        rate= ALBERTA_RATE;
    }
    amt *= rate;
} else {
    rate = 1;
}

calc = (2 * basis(amt)) + (extra(amt) * 1.05);

