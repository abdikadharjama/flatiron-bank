
import React, { useState } from "react";

function TransactionForm({ onAddTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddTransaction(formData.date, formData.description, formData.category, formData.amount);
    setFormData({ date: "", description: "", category: "", amount: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="date" name="date" value={formData.date} onChange={handleChange} />
      <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
      <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange} />
      <input type="number" name="amount" placeholder="Amount" value={formData.amount} onChange={handleChange} />
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
