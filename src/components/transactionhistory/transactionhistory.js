import css from './transactionhistory.module.css';
import PropTypes from 'prop-types';

export default function TransactionHistory({ transactions }) {
  return (
    <>
      <div className={css.transactionhistory}>
        <table className={css.transHist_main}>
          <thead className={css.transHist_header}>
            <tr className={css.transHist_header_row}>
              <th className={css.transHist_header_style}>Type</th>
              <th className={css.transHist_header_style}>Amount</th>
              <th className={css.transHist_header_style}>Currency</th>
            </tr>
          </thead>
          <tbody className={css.transHist_body}>
            {transactions.map(transaction => (
              <tr id={transaction.id} className={css.transHist_item_row}>
                <td>{transaction.type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.currency}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

// propTypes
TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
