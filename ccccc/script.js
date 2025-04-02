/*
let a = 5;

switch (a) {
    case 1:
        console.log("a = 1");
        break;

    case 2:
        console.log("a = 1");
        break;

    case 3:
        console.log("a = 1");
        break;

    case 4:
        console.log("a = 1");
        break;

    case 5:
        console.log("a = 1");
        break;

    default:
        console.warn("a does not match any case");
}
        */

let array = [1,2,3,4,5,6,7,8,9,10]
console.log(array);
console.error(array.lenght);
console.warn(array[9]);
array.push(11);
console.log(array);
array.unshift(0);
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);

for(let i = 0; i < array.lenght-1 ; i++)
{
console.log(array[i]);
}