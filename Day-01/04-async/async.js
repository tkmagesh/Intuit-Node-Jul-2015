//Sync
function add(x,y){
   if (x === 0 || y === 0) throw new Error("Invalid arguments");
   var result = x + y;
   return result;
}

function addClient(x,y){
   try{
      var result = add(x,y);
      console.log("result = ", result);
   } catch (e){
       console.log("Something went wrong", e);
   }
}

//Async (with bug)
function addAsync(x,y, onResult){
   setTimeout(function(){
      if (x === 0 || y === 0) {
          var err =  new Error("Invalid arguments");
          onResult(err, null)
      }

      var result = x + y;
      onResult(null, result);
   },4000);
}

function addAsyncClient(x,y){
  addAsync(x,y, function(err, result){
      if (err){
          console.log("Something went wrong", err);
          return;
      }
      console.log("result = ", result);
  });
}

