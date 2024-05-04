import React from "react";
import Expense from "../Expense";

interface Props {
  expenses: Expense[];
  total: number;
  onDeleteExpense: (index: number) => void;
}

const ExpenseList = ({ expenses, total, onDeleteExpense }: Props) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th key="description" scope="col">
              Description
            </th>
            <th key="price" scope="col">
              Price ($)
            </th>
            <th key="category" scope="col">
              Category
            </th>
            <th key="button-col" scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense, index) => (
            <tr key={index}>
              <td scope="row">{expense.description}</td>
              <td>{expense.amount}</td>
              <td>{expense.category}</td>
              <td>
                <button onClick={() => onDeleteExpense(index)} type="button" className="btn btn-outline-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {/* add bottom row with total */}
          <tr key="total">
            <td scope="row">Total</td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ExpenseList;
