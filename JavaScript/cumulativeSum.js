let cumulativeSum = (arr) => {
    let sum = 0;
    let output = [];
    for(let i = 0; i < arr.length; i++){
        sum += arr[i];
        if(sum > 0){
            output.push(sum);
        }
    }
    return output;
};

console.log(cumulativeSum([1, 4, -5, 6]));