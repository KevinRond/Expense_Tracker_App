import { useState } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import Expense from "./Expense";
import ExpenseList from "./components/ExpenseList";

function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [category, setCategory] = useState("All Categories");

  const visibleExpenses =
    category === "All Categories"
      ? expenses
      : expenses.filter((expense) => expense.category === category);

  const totalExpense = visibleExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const onDelete = (index: number) =>
    setExpenses(expenses.filter((_, i) => i !== index));

  return (
    <>
      <div className="mb-3">
        <Form
          onSubmit={(data) => setExpenses((expenses) => [...expenses, data])}
        />
      </div>
      <div className="mb-3">
        <Filter
          onSelectCategory={(category) => {
            setCategory(category);
          }}
        />
      </div>
      <div className="mb-3">
        <ExpenseList
          expenses={visibleExpenses.map((expense) => expense)}
          total={totalExpense}
          onDeleteExpense={onDelete}
        />
      </div>
    </>
  );
}

export default App;
