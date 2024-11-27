const fruits = [{ name: "apple", color: "red", calories: 95 },
{ name: "pineapple", color: "orange", calories: 206 },
{ name: "banana", color: "yellow", calories: 68 },
{ name: "orange", color: "orange", calories: 0.74263 },
{ name: "lemon", color: "green", calories: 59 }];


const maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);



console.log(maxFruit);



