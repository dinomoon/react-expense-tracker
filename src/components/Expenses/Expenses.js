import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import Expensefilter from './ExpenseFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {
  const [filterdYear, setFilterdYear] = useState('2020');
  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  const filteredExpenses = props.items.filter(
    (item) => item.date.getFullYear() === +filterdYear
  );

  return (
    <Card className='expenses'>
      <Expensefilter
        selected={filterdYear}
        onFilterChange={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList filteredExpenses={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
