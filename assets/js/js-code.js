//1
const arr1 = ['Hello', 1234,'qwerty',87654321]
for(i=0; i < arr1.length; i ++){
    console.log(i, arr1[i]);
}

// //2
// const arr2 = [1, 7, 88, 33, 120, 127]
// for(i=0;i , arr2.length; i++){
//     if()
// }
// for(i=0, i <){
//     for(){}
// }
//3
const arr3 = [1,2,3]
const arr4 = [4,5,6]
const arr3And4 = arr3.concat(arr4)
console.log('arr3And4 :>> ', arr3And4);
//4
const arr5 = [6,5,4]
arr5.splice(0, 3, 4,5,6)
console.log(arr5);
//5
const arr6 = [1,2,3]
arr6.push(4,5,6)
console.log(arr6);
//6
const arr7 = [7,8,9]
arr7.unshift(1,2,3)
console.log(arr7);
//7
const arr8 = ['aaa','bbb','ccc']
console.log(arr8[0]);
arr8.shift()
console.log(arr8);
//8
const arr9 = ['aaa','bbb','ccc']
console.log(arr9[2]);
arr9.pop()
console.log(arr9);
//9
const arr10 = [9,10,11,12,13]
const newArr10 = arr10.slice(1,5)
console.log(newArr10);
//10
const arr11 = [1,2,3,4,5]
arr11.splice(1,4,4,5)
console.log(arr11);
//11
const arr12 = [1,2,3,4,5]
const newArr12 = arr12.slice(2,5)
console.log(newArr12);
//12
const arr13 = [1,2,3,4,5]
arr13.splice(1,4)
arr13.push('w', 'trtr', 2, 3, 4, 'vvv', 'a', 'hello')
console.log(arr13);