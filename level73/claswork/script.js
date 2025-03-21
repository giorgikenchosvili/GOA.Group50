// 1) შექმენით ფუნქცია რომელსაც არგუმენტად გადაეცემა სია შემდეგ კი დაბეჭდეთ ამ სიის ჯამი


function math(numbers){
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers;
    }
    console.log(total);
}





// 1


// 2
function createArray(number) {
    const newArray = [];
    for (let counter = 1; counter <= number; counter++) {
        newArray.push(counter);
    }
    return newArray;
}


// 3
function moveZeros(arr) {
    let myArr = []
    for(let i of arr){
      if( i !== 0)
        myArr.push(i)
    }
    for(let num of arr){
      if(num === 0)
        myArr.push(num)
    }
    return myArr
  }


// 4

function positiveSum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            total += arr[i];
        }
    }
    return total;
}


// 4

function countSheeps(sheep) {
    let count = 0
    for(let s of sheep){
      if(s == true)
        count +=1
    }
    return count
  }


//   5


