import React from "react";
import "./App.css";
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2022, 11, 19),
    },
    {
      id: "e2",
      title: "Car Insuarance",
      amount: 1000.67,
      date: new Date(2021, 11, 16),
    },
    {
      id: "e3",
      title: "New T.V",
      amount: 5000.67,
      date: new Date(2019, 11, 12),
    },
    {
      id: "e4",
      title: "New Desk",
      amount: 1100.67,
      date: new Date(2018, 11, 10),
    },
  ];

  const addExpenseHandler = (expense) => {
    console.log(expense);
  }


  return (
    <div className="App">
      <h2>Let's get started</h2>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;
