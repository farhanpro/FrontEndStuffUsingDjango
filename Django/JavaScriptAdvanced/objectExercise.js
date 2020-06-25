var employee = {
    name:"Tauseef",
    job:"Programmer",
    age:22,
    namelen(){
         console.log(this.name.length)
    }
}

var employee2 = {
    name : "Farhan Shaikh",
    job : "Programmer",
    age: 31,
    dis(){ 
           for(key in employee2){
            
              
                alert( employee2[key])
            }


            //alert(employee2[key])
        
    }
}
var employee3 = {
    name : "Farhan Shaikh",
    job : "Programmer",
    age: 31,
    display(){
        console.log(this.name.split("Farhan "));
    }
}

