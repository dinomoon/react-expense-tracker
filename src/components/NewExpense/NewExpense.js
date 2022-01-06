import React, { useState } from 'react';
import Expenseform from './ExpenseForm';
import './NewExpense.css';

const Newexpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button type='button' onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <Expenseform
          onSaveExpenseData={saveExpenseDataHandler}
          onCancelEditing={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default Newexpense;
