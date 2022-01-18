let linearSearch = (array, searchTerm) => {
    for(let i=0; i<array.length; i++){
        if(array[i] === searchTerm){
            return i;
        }
    }
    return "Not found."
};

console.log(linearSearch([9, 5, 14, 8, 42, 50], 14));
console.log(linearSearch([9, 5, 14, 8, 42, 50], 88));