function SleepIn(Weekday,Vacation){
    if(Vacation === false && Weekday === false){
        return  true;
    }
    if(Weekday === true && Vacation === false){
        return false;
    }
    if(Weekday === false && Vacation === true){
        return true;
    }
}
function MonkeyTroble(aSmile,bSmile){
    if(aSmile === true && bSmile === true){
        return true;
    }
    if(aSmile === false && bSmile === false){
        return true;
    }
    if(aSmile === true && bSmile === false){
        return false;
    }
    else{
        return false;
    }
}
function StringTime(str,n){
    tr = " " ;

     for (i=0;i<n;i++){    
         tr = tr + str  ;
        }
        return tr;
        
}

function LuckySum(a, b, c){
    
    if (c === 13 ){
        return (a+b)}
    else if (b == 13){
        return (a);}
    else{
        return(a+b+c);
    }


}

function CaughtSpeeding(speed, is_birthday){
    if(speed <= 60 && is_birthday=== false){
            return 0;
    }

    else if(speed >= 61 && speed <= 80 && is_birthday === false){
        return 1;       
 }
    else if(speed >= 61 && speed <=80 && is_birthday === true){
        return 0;
    }
    else if(speed >= 81 && is_birthday === false){
        return 2;
    }
    else if(speed >= 82 && is_birthday === true ){
        return 0;
    }
}


  
function MakeBricks(small, big, goal){
    
    if ((small + (big*5))>=goal){
        return true;
  }
  else {
      return false;
  }
}  
  
SleepIn();
MonkeyTroble();


