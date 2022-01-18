from operator import indexOf


def linearSearch(arr, searchTerm):
    for i in arr:
        if i == searchTerm:
            return arr.index(i)
    return -1

print(linearSearch([9, 5, 14, 8, 42, 50], 14))
print(linearSearch([9, 5, 14, 8, 42, 50], 88))