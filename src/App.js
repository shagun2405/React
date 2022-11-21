import React from "react";
// import logo from './logo.svg';
import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
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

  return (
    <div className="App">
      <h2>Let's get started</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
