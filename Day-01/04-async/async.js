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
      if (x === 0 || y === 0) throw new Error("Invalid arguments");
      var result = x + y;
      onResult(result);
   },4000);
}

function addAsyncClient(x,y){
   try{
      add(x,y, function(result){
          console.log("result = ", result);
      });
   } catch (e){
       console.log("Something went wrong", e);
   }
}

