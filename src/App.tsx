import { useState, useEffect } from "react";
import Form from "./components/Form";
import Filter from "./components/Filter";
import categories from "./categories";
import Expense from "./Expense";
import ExpenseList from "./components/ExpenseList";


function App() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [category, setCategory] = useState("All Categories");
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  useEffect(() => {
    if (category === "All Categories") {
      setFilteredExpenses(expenses);
    } else {
      setFilteredExpenses(
        expenses.filter((expense) => expense.category === category)
      );
    }
  }, [category, expenses]);

  const totalExpense = filteredExpenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );
  const onDelete = (index: number) =>
    setExpenses(expenses.filter((_, i) => i !== index));

  return (
    <>
      <div className="mb-3">
        <Form onSubmit={(data) => setExpenses((prev) => [...prev, data])} />
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
          expenses={filteredExpenses.map((expense) => expense)}
          total={totalExpense}
          onDeleteExpense={onDelete}
        />
      </div>
    </>
  );
}

export default App;
