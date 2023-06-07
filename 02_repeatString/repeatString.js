const repeatString = function(x,y) {
    if(y < 0) return "ERROR";
    if(y == 0) return "";
    var result = x;
    for(let i = 1; i < y; i++)
    {
        result = result.concat(x);
    }
    return result;
};

// Do not edit below this line
module.exports = repeatString;
