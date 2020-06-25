function sleepIn(weekday,vacation){
    if (weekday === true && vacation === false){
        return false;
    }
    else if (weekday === false && vacation === false){
        return true;
    }
    else if (weekday === false && vacation === true){
        return true;
    }

}
function monkeyTroble(asmile,bsmile){
    //monkeyTrouble(true, true) → true
// monkeyTrouble(false, false) → true
// monkeyTrouble(true, false) → false
    if (asmile === true && bsmile === true){
        return true;
    }
    else if (asmile === false && bsmile === false){
        return true;
    }
    else{
        return false;
    }
}
function stringTimes(str, n) {
// stringTimes("Hi", 2) → "HiHi"
// stringTimes("Hi", 3) → "HiHiHi"
// stringTimes("Hi", 1) → "Hi"    
    temp = "";
    for(i=1;i<=n;i++){
      temp = str + temp  
    }
    return temp;
}

function luckySum(a, b, c){
    if(a === 13){
        return "The first value is 13 cannot go forward";
    }
    else if(b === 13){
        return a;
    }
    else if (c === 13){
        return a+b;
    }
    else {
        return a+b+c;
    }
}
// makeBricks(3, 1, 8) → true
// makeBricks(3, 1, 9) → false
// makeBricks(3, 2, 10) → true

function makeBricks(small, big, goal){
small = small * 1;
big = big * 5;
if((small+big)>=goal){
    return true;
}
else{
    return false;
}
}