function f1(){
    console.log("f1 is triggered");
    setTimeout(function(){
        console.log("f1 is completed");
    },3000)
}

function f2(){
    console.log("f2 is triggered");
    setTimeout(function(){
        console.log("f2 is completed");
    },3000)
}

function f3(){
    console.log("f3 is triggered");
    setTimeout(function(){
        console.log("f3 is completed");
    },3000)
}

function f4(){
    console.log("f4 is triggered");
    setTimeout(function(){
        console.log("f4 is completed");
    },3000)
}


var fns = [f1, f2, f3, f4];

function exec(fns){
    for(var i=0; i<fns.length; i++){
        var fn = fns[i];
        fn();
    }
}

