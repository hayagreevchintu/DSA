def binarySearch(array, min, max, searchTerm):
    if max >= min:
        mid = min + ((max - min) // 2)
        if searchTerm == array[mid]:
            return mid
        elif searchTerm > array[mid]:
            return binarySearch(array, mid+1, max, searchTerm)
        return binarySearch(array, min, mid-1, searchTerm)
    return -1

arr = [1, 5, 8, 14, 19, 25]
print(binarySearch(arr, 0, len(arr)-1, 14))
print(binarySearch(arr, 0, len(arr)-1, 1))
print(binarySearch(arr, 0, len(arr)-1, 88))
print(binarySearch(arr, 0, len(arr)-1, 25))