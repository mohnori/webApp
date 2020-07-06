const array = [-1, 0, 3, 100, 99, 2, 99]; // should return 100
const array2 = ["a", 3, 4, 2]; // should return 4
const array3 = []; // should return 0

// function biggestNumberInArray(arr) {
//   let r = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > r) {
//       r = arr[i];
//     }
//     // console.log(arr[i])
//   }
//   return r;
// }
// console.log(biggestNumberInArray(array));

function biggestNumberInArray2(arr) {
  let r = null ;
  for (item in arr) {
      if (typeof arr[item] == "number"){
        if (arr[item] > r) {r = arr[item]}
       //console.log(arr[item])
      }

  }
  return r;
}
console .log(biggestNumberInArray2(array2));



function biggestNumberInArray3(arr) {
  let r = 0 ;
  for (item of arr) {
      if (typeof arr[item] == "number"){
        if (arr[item] > r) {r = arr[item]}
       //console.log(arr[item])
      }

  }
  return r;
}
console.log(biggestNumberInArray3(array3));
