import Transaction from "./Transaction";
function TransactionList({ transactions }) {
  return (
    <>
      <h3>Transactions</h3>
      <table className="transaction">
        <thead>
          <tr>
            <th>Date</th>
            <th>Description</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transactions) => (
            <Transaction trans={transactions} />
          ))}
        </tbody>
        
      </table>
    </>
  );
}

export default TransactionList;
