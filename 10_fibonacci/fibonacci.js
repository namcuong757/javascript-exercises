const fibonacci = function(value) {
    if (value < 0) return "OOPS";
    if(!Number.isInteger(value)) value = parseInt(value);
    var n1 = 0; n2 = 1; 
    for(let i = 0; i < value; i++)
    {
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return n1;
};

// Do not edit below this line
module.exports = fibonacci;
