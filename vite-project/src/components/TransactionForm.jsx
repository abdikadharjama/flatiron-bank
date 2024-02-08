import React, { useState } from "react";

function TransactionForm({ newTransaction }) {
  const [formData, setFormData] = useState({
    date: "",
    description: "",
    category: "",
    amount: 0,
  });

  function handleSubmit(e) {
    e.preventDefault();

    newTransaction(
      formData.date,
      formData.description,
      formData.category,
      formData.amount
    );

    setFormData({
      date: "",
      description: "",
      category: "",
      amount: 0,
    });
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="date"
          name="date"
          id="date"
          value={formData.date}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          id="des"
          placeholder="Enter Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          id="cat"
          placeholder="Enter Category"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="number"
          name="amount"
          id="num"
          placeholder="Enter Amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default TransactionForm;
