// Transactionlist.jsx
import React, { useContext } from 'react';
import { GlobalContext } from '../Context/Globalstate';
import Transaction from './Transaction'; // Ensure the file path is correct

const TransactionList = () => {
  const { transactions, deleteTransaction } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
            onDelete={deleteTransaction}
          />
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
