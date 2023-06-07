const sumAll = function(x, y) {
    if(!Number.isInteger(x) || !Number.isInteger(y)) return "ERROR";
    else if(x < 0 || y < 0) return "ERROR";
    var sum = 0;
    var start, end;
    if(x > y) 
    {
        start = y;
        end = x;
    }    
    else
    {
        start = x;
        end = y;
    }
    for(let i = start; i <= end; i++)
    {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
