import css from './transactionhistory.module.css';
// import PropTypes from 'prop-types';

export default function TransactionHistory({ transactions }) {
  return (
    <div className={css.transactionhistory}>
      <h2 className="{css.transactionhistory-subheader}">
        component "TransactionHistory"
      </h2>
    </div>
  );
}

// propTypes
