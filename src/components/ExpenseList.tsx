import React from "react";
import Expense from "../Expense";

interface Props {
  expenses: Expense[];
  total: number;
  onDeleteExpense: (index: number) => void;
}

const ExpenseList = ({ expenses, total, onDeleteExpense }: Props) => {
  if (expenses.length === 0) {
    return <></>;
  }

  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th key="description" scope="col">
              Description
            </th>
            <th key="amount" scope="col">
              Amount
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
              <td>${expense.amount.toFixed(2)}</td>
              <td>{expense.category}</td>
              <td>
                <button
                  onClick={() => onDeleteExpense(index)}
                  type="button"
                  className="btn btn-outline-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr key="total">
            <td scope="row">Total</td>
            <td>${total.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
