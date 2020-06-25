var roaster = [ ]
function addNew(){
    var newName = prompt("What name you want to enter ?")
    roaster.push(newName)
}
function removeName(){
    var remName = prompt("What name you want to remove ? ")
    var index = roaster.indexOf(remName)
    roaster.splice(index,1)
}
function display(){
    console.log(roaster);
}

var start = prompt("Would you like to start the web app ? y/n")
var request = "empty";
if(start === 'y'){
    while (request !== 'quit'){
        request = prompt("Please select an option : Add, Remove, Display, Quit.")
        if (request === 'add'){
            addNew();
        }
        else if (request === 'display'){
            display();
        }
        else if(request === 'remove'){
            removeName();
        }
        else{
            request = "quit";
        }
    }
}
alert("Thanks for using the webapp")