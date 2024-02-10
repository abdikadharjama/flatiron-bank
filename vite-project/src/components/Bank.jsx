import React, { useState, useEffect } from "react";
import TransactionList from "./TransactionList";
import TransactionForm from "./TransactionForm";
import TransactionFilter from "./TransactionFilter";

function Bank() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");
  const [sortType, setSortType] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/transactions")
      .then((res) => res.json())
      .then(setTransactions);
  }, []);

  const addTransaction = (date, description, category, amount) => {
    const newTransaction = { id: Math.random(), date, description, category, amount };
    setTransactions([newTransaction, ...transactions]);
  };

  const deleteTransaction = (id) => {
    setTransactions(transactions.filter(transaction => transaction.id !== id));
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const sortedTransactions = transactions.sort((a, b) => {
    if (sortType === "category") {
      return a.category.localeCompare(b.category);
    } else if (sortType === "description") {
      return a.description.localeCompare(b.description);
    }
    return 0;
  });

  const filteredTransactions = sortedTransactions.filter(transaction =>
    transaction.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionFilter onSearchChange={setSearch} />
      <select onChange={handleSortChange} defaultValue="">
        <option value="">Sort by</option>
        <option value="category">Category</option>
        <option value="description">Description</option>
      </select>
      <TransactionList transactions={filteredTransactions} onDeleteTransaction={deleteTransaction} />
    </div>
  );
}

export default Bank;
