import React, { useState } from 'react';
import './ExpenseForm.css';

const Expenseform = (props) => {
  const [inputValues, setInputValues] = useState({
    title: '',
    amount: '',
    date: '',
  });

  const changeInputHandler = (e) => {
    const { name, value } = e.target;
    setInputValues((prevState) => ({
      ...prevState,
      [name]: name === 'date' ? new Date(value) : value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSaveExpenseData(inputValues);
    setInputValues((prevState) => ({
      ...prevState,
      title: '',
      amount: '',
      date: '',
    }));
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor=''>Title</label>
          <input
            name='title'
            value={inputValues.title}
            type='text'
            onChange={changeInputHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Amount</label>
          <input
            name='amount'
            value={inputValues.amount}
            type='number'
            min='0.01'
            step='0.01'
            onChange={changeInputHandler}
          />
        </div>
        <div className='new-expense__control'>
          <label htmlFor=''>Date</label>
          <input
            name='date'
            value={inputValues.date}
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            onChange={changeInputHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default Expenseform;
