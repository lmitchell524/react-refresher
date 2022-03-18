import React, {useState} from 'react';

import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from './ExpenseFilter.js';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setfilteredYear(selectedYear);
  }

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onFilterSelect={filterChangeHandler} />
        {props.items.filter((item) => item.date.getFullYear().toString() === filteredYear)
        .map(expense => 
        // best to use a unique id and not index for a given item is always the same and 
        //not directly attached to the content
        // can be number or string - any identifer works
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        )}
      </Card>
    </div>
  );
}

export default Expenses;