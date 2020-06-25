//
var Restart = document.querySelector('#b')
//
var Square = document.querySelectorAll('td')

//
function clearBoard(){
    for (var i = 0 ; i <  Square.length; i++){
        Square[i].textContent = '';
    }
}
Restart.addEventListener('click',clearBoard);
//
function changeMaker(){
    if(this.textContent === ''){
        this.textContent = 'X';
    }else if (this.textContent === 'X'){
        this.textContent = 'O'; 
    }else{
        this.textContent = '';
    }
}
for (var i = 0; i < Square.length; i++){
    Square[i].addEventListener('click',changeMaker)
}