def cumulativeSum(arr):
    sum = 0
    output = []
    for i in arr:
        sum += i
        if sum > 0:
            output.append(sum)
    return output

print(cumulativeSum([1, 4, 5, -6]))