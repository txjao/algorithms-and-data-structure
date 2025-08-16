function binarySearch(nums: number[], numForSearch: number): number | null {
    let fisrt = 0
    let last = nums.length - 1

    while (fisrt <= last) {
        let middle = Math.floor((fisrt + last) / 2)
        let response = nums[middle]

        if (response == numForSearch) {
            return middle
        } else if (response > numForSearch) {
            last = middle - 1
        } else if (response < numForSearch) {
            fisrt = middle + 1
        }
    }

    return null
}

const nums = [1,2,3,7,8,9]

console.log("Index of the search: ", binarySearch(nums, 8))
