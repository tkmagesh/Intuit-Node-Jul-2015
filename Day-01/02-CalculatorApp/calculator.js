var calculator = {
    add : function(x,y){
        return x + y;
    },
    subtract : function(x,y){
        return x - y;
    },
    multiply : function(x,y){
        return x * y;
    },
    divide : function(x,y){
        return x / y;
    },
    sign : function(x){
        return x < 0 ? -1 : 1;
    }
}
module.exports = calculator;
