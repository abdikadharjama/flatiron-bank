import React from "react";
import Transaction from "./Transaction";

function TransactionList({ transactions, onDeleteTransaction }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => (
          <Transaction key={transaction.id} transaction={transaction} onDeleteTransaction={onDeleteTransaction} />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionList;
