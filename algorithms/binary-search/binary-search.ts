function binarySearch(nums: number[], numForSearch: number): number | null{
  let left: number = 0
  let right: number = nums.length - 1

  while (left <= right) {
    let middle = Math.floor((left + right) / 2)
    let founded = nums[middle]

    if(founded === numForSearch){
      return middle
    }

    if(middle > numForSearch){
      right = middle - 1
    }else if(middle < numForSearch){
      left = middle + 1
    }
  }

  return null
}

const nums = [1, 2, 3, 7, 8, 9]

console.log("Index of the search: ", binarySearch(nums, 8))
