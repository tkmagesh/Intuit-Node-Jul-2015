var fs = require("fs");

//var fileContents = fs.readFileSync("test.txt", {encoding : 'utf8'});

/*fs.readFile("test.txt", {encoding : 'utf8'}, function(err, fileContents){
    if (err){
        console.log(err);
        return;
    }
    console.log(fileContents);
})*/

var stream = fs.createReadStream('test.txt', {encoding : 'utf8'});
var readCount = 0;
stream.pipe(process.stdout);

stream.on('data', function(chunk){
    ++readCount;
  //console.log(chunk);
});

stream.on('end', function(){
    console.log("Job done with " + readCount + " reads");
});

stream.on('error', function(err){
    console.log("something went wrong..", err);
});


