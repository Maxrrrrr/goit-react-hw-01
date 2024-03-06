import css from './TransactionHistory.module.css'
const TransactionHistory = ({ items }) => {
  return (
    <table>
      <thead>
        <tr>
          <th className={css.transactionId}>ID</th>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => (
          <tr key={item.id}>
            <td className={css.transactionId}>{item.id}</td>
                <td className={css.transactionType}>{item.type}</td>
                <td className={css.transactionAmount}>{item.amount}</td>
            <td className={css.transactionCurrency}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;