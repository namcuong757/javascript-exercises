const palindromes = function (string) {
    string = string.replace(/[^\w\s\']|_/g, "").replace(/\s+/g, " ");
    string = string.replaceAll(/\s/g,'')
    var arr = string.split("");
    var orig = arr;
    for(let i = 0; i < arr.length; i++)
    {
        if(orig[i].toLowerCase() != arr.reverse()[i].toLowerCase()) return false;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
