function TransactionFilter({ onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search transactions"
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default TransactionFilter;
