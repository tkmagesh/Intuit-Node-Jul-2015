function f1(next){
    console.log("f1 is triggered");
    setTimeout(function(){
        console.log("f1 is completed");
        next();
    },3000)
}

function f2(next){
    console.log("f2 is triggered");
    setTimeout(function(){
        console.log("f2 is completed");
        next();
    },3000)
}

function f3(next){
    console.log("f3 is triggered");
    setTimeout(function(){
        console.log("f3 is completed");
        next();
    },3000)
}

function f4(next){
    console.log("f4 is triggered");
    setTimeout(function(){
        console.log("f4 is completed");
        next();
    },3000)
}


var fns = [f4, f3, f2, f1];

function exec(fns){
    var first = fns[0];
    var remaining = fns.splice(1)
    var next = function(){
        exec(remaining);
    }
    if (typeof first === "function")
        first(next);
}

