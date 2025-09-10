function add (a: number,b:number): number{
    return a+b;
}
console.log(add(2,6));
function sub (a: number,b:number): number{
    return a-b;
}
console.log(sub(9,6));
let numbers: number[] = [1,2,3,4];
numbers.push(5);
console.log(numbers);
let fruits: string[] = ["apple", "banana", "kiwi"];


fruits.push("dragon fruit");
console.log(fruits);

let mixed: (string | number)[] = ["apple", 1, "banana", 2];
mixed.push("kiwi");
mixed.push(3);
console.log(mixed);






