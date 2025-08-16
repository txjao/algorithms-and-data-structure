function binarySearch(nums: number[], numForSearch: number): number | null {
    let fisrt = 0
    let last = nums.length - 1

    while (fisrt <= last) {
        let middle = (fisrt + last) / 2
        let response = nums[middle]

        if (response == numForSearch) {
            return response
        }

        if (middle < numForSearch) {
            last = middle
        }

        if (middle > numForSearch) {
            fisrt = middle
        }
    }

    return null
}

const nums = [1,2,3,7,8,9]

console.log(binarySearch(nums, 8))
