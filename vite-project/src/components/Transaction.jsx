function Transaction({ transaction, onDeleteTransaction }) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>${transaction.amount}</td>
      <td><button onClick={() => onDeleteTransaction(transaction.id)}>Delete</button></td>
    </tr>
  );
}

export default Transaction;
