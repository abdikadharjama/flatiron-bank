function Transaction( {trans}){
return (
        <tr key={trans.key}>
          <td>{trans.date}</td>
          <td>{trans.description}</td>
          <td>{trans.category}</td>
          <td>{trans.amount}</td>
        </tr>
)
}

export default Transaction