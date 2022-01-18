let binarySearch = (array, min, max, searchTerm) => {
    if(max >= min){
        let mid = min + Math.floor((max-min) / 2);
        if(array[mid] === searchTerm){
            return mid;
        }else if(array[mid] > searchTerm){
            return binarySearch(array, min, mid-1, searchTerm);
        }
        return binarySearch(array, mid+1, max, searchTerm);
    }
    return -1;
};

let arr = [1, 5, 8, 14, 19, 25];
console.log(binarySearch(arr, 0, arr.length-1, 88));
console.log(binarySearch(arr, 0, arr.length-1, 1));
console.log(binarySearch(arr, 0, arr.length-1, 25));
console.log(binarySearch(arr, 0, arr.length-1, 14));
