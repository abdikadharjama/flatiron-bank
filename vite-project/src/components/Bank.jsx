import { useEffect, useState } from "react";
import TransactionList from "./TransactionList";
import TransactionFilter from "./TransactionFilter";
import TransactionForm from "./TransactionForm";

function Bank() {
  const [transactions, setTransactions] = useState([]);
  const [search, setSearch] = useState("");

  const URL = "http://localhost:3000/transactions";
  useEffect(() => {
    async function fetchTransactions() {
      try {
        const response = await fetch(URL);
        if (!response.ok) throw new Error("Failed to fetch");
        const data = await response.json();
        setTransactions(data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    }

    fetchTransactions();
  }, []);

  async function addTransaction(date, description, category, amount) {
    try {
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          id: Math.random() + 1,
          date: date,
          description: description,
          category: category,
          amount: amount,
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error(`Failed to add transaction: ${response.statusText}`);
      }
  
      const data = await response.json();
  
      setTransactions((prevTrans) => [data, ...prevTrans]);
    } catch (error) {
      console.error("Error adding transaction:", error);
      // Handle error as needed
    }
  }
  

  const filteredTransactions = transactions.filter((item) => {
    if (search) {
      return item.description.toLowerCase().includes(search.toLowerCase());
    }
    return transactions;
  });

  return (
    <>
      <h2>New Transaction</h2>
      <TransactionForm newTransaction={addTransaction}/>
      <h2>Search</h2>
      <TransactionFilter search={setSearch} />
      <TransactionList transactions={filteredTransactions} />
    </>
  );
}
export default Bank;
