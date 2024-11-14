const transactionsEl = document.querySelector('.transactions');
const balanceNumberEl = document.querySelector('.balance-number');
const numberIncomeEl = document.querySelector('.number--income');
const numberExpensesEl = document.querySelector('.number--expenses');
const formEl = document.querySelector('.form');
const inputDescriptionEl = document.querySelector('.input--description');
const inputAmountEl = document.querySelector('.input--amount');

clickHandler = (event) => {
    // remove transaction item visually
    const clickedEl = event.target.parentNode;
    clickedEl.remove();


    // update income or expenses
    const amountEl = clickedEl.querySelector('.transaction__amount');
    const amount = +amountEl.textContent;





    if (amount > 0) {
        const currentIncome = +numberIncomeEl.textContent;
        const updatedIncome = currentIncome - amount;
        numberIncomeEl.textContent = updatedIncome;
    } else {
        const currentExpenses = numberExpensesEl.textContent;
        const updatedExpenses = currentExpenses - amount * -1;
        numberExpensesEl.textContent = updatedExpenses;
    }

    // upadate balance
    const income = +numberIncomeEl.textContent;
    const expenses = numberExpensesEl.textContent;
    balanceNumberEl.textContent = income - expenses;

    // make red if balance negative
    if (income - expenses < 0) {
        balanceNumberEl.style.color = 'red';
    }

}

transactionsEl.addEventListener('click', clickHandler);





