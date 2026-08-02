function greet(name:string){
    console.log("Hello "+name);
}

function passname(callback : Function){
callback("Pratik");
}

passname(greet);