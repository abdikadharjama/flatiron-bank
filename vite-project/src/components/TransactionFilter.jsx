function TransactionFilter({search}) {
  const handleFilter = (e) => {
    search(e.target.value)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="Search description"
        onChange={handleFilter}
      />
    </div>
  );
}
export default TransactionFilter;
