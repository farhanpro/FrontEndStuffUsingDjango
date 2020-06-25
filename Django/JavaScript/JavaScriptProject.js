var FirstName = prompt("Enter your  First Name : ");
var SecondName = prompt("Enter your Second Name : ");
var Age = prompt("Enter your Age : ");
var Height = prompt("Enter your Height in Centimeter : ");
var PetName = prompt("Enter your Pet Name : ");
alert(FirstName[0]);
alert(SecondName[0]);
if((FirstName[0]===SecondName[0]) && (Age >= 20 && Age <= 30) && (Height >= 170) && (PetName[PetName.length-1]==="y")){
    console.log("Welcome comarade")
}
else{
    console.log("Nothing to Do Here !")
}