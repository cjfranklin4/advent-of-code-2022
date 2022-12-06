import {calorieList} from './calorieList.mjs'

/* PART 1 */

//console.log(calorieList)

//Split the string literal and turn into an array of the sum of calories for each elf
let calorieArray = calorieList.split('\n').join('-').split('--')

const convertStr = (str) => {
let num = str.split('-').map((item) => parseInt(item))
let sum = num.reduce((accum, current) => accum + current)
return sum
}

let sumArray = calorieArray.map(convertStr)

//Sort the calorie counts from max to min and Get the hightest Calorie count
let highestCal = sumArray.sort((a,b) => b-a)

console.log(highestCal[0], 'most calories')

/* PART 2 */
console.log(highestCal[0]+highestCal[1]+highestCal[2], 'top 3 calories')