import React from 'react';
import  Header from './components/Header';
import  Balance from './components/Balance';
import  IncomeExpenses from './components/IncomeExpenses';
import  Transactionlist from './components/Transactionlist';
import  AddTransaction from './components/AddTransaction';

import { GlobalProvider } from './Context/Globalstate';
import './App.css';


function App() {
  return (
    <GlobalProvider>
     <Header/>
     <div className="container">
      <Balance/>
      <IncomeExpenses/>
      <Transactionlist/>
      <AddTransaction/>
     </div>
    </GlobalProvider>
  );
}

export default App;
