import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    // Multi states usage example:
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
        // Right in most of the cases, but not safe - multi states
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value
        // });
        // THE RIGHT WAY -> WHEN EVER I WANT TO USE PREVOIUS STAT I WANT TO DO IT THROW ARROW FUNCTION - multi stats
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value };
        // });
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
        // multi states
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // });
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
        // multi states
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__controls">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={enteredDate} onChange={dateChangeHandler} />
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;