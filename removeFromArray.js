let arry = [1,2,3,4];

//arry.splice(2, 1);

const removeFromArray = function(a, index) {
    let newArray = [...a];
    newArray.splice(index, 1);
    return newArray;
};

let newArray = removeFromArray(arry, 2)

module.exports = removeFromArray