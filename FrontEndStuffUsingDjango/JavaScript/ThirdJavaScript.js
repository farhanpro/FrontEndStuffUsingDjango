var chocolate = prompt("Enter sales of Chocolates");
var chips = prompt("Enter sales of Chips");
var report = "Blank";
if (chocolate >= 10 && chips >=10 ){
    var report = "High Sales"
}
else if(chocolate >= 5 && chips >=5 ){
    var report = "Medium Sales"
}
else if(chocolate <= 5 && chips <= 5 ){
    var report = "Medium Sales"
}

else if(chocolate === 0 && chips === 0){
    var report = "No sales"
} 
else{
    var report = "Not reported"
}
alert(report)