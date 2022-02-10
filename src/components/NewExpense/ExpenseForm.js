import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  /* version with just only one state
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
*/
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /*
    setUserInput({
      ...userInput, //not changed values are kept, otherwise they would be lost in case of just one state for few inputs
      enteredTitle: event.target.value,
    });
    setUserInput((prevState) => {
      //guarantying that u always get the actual state; use whenever your state update depends on the previous state
      return { ...userInput, enteredTitle: event.target.value };
    });
    */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /*
    setUserInput({
      ...userInput, //not changed values are kept, otherwise they would be lost in case of just one state for few inputs
      enteredAmount: event.target.value,
    });
     */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /*
    setUserInput({
      ...userInput, //not changed values are kept, otherwise they would be lost in case of just one state for few inputs
      enteredDate: event.target.value,
    });
     */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = "";
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
