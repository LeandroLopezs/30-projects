

/*const text = 'Hello';
const salary = 2000;
const isExpense = false;
const expenses = [1000, 30, 25];
const transaction = {
    description: 'Salary',
    amount: 5000
};*/
//function declaration
/*function calculateBalance(income, expenses) {
    const balance = income - expenses;
    return balance;
};*/
//function expression
/*
function calculateBalance(income, expenses) {
    const balance = income - expenses;
    return balance;
};
*/
//arrow function
const calculateBalance = (income) => income - 500;


const result = calculateBalance(5000);
console.log(result);


