const array = [1,2,10,16];
console.log('array', array)
const double = [];
// forEach
const newArray = array.forEach(num =>  double.push(num *2));

console.log('forEach',double);
// map
const mapAraay = array.map(num=> num*3);
console.log('map' ,mapAraay)

//filter

const filterAraay = array.filter(num => num > 5);
console.log('filter', filterAraay);

// reduce

const reduceArray  = array.reduce((acc,num) =>{
    return acc + num
},10);
console.log('reduce',reduceArray);
