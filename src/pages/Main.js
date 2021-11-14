import React from "react";
import { Header } from "../components/transactions/components/Header";
import { Balance } from "../components/transactions/components/Balance";
import { IncomeExpenses } from "../components/transactions/components/IncomeExpenses";
import { TransactionList } from "../components/transactions/components/TransactionList";
import { AddTransaction } from "../components/transactions/components/AddTransaction";

import { GlobalProvider } from "../components/transactions/context/GlobalState";

const Main = () => {
  return (
    <GlobalProvider>
      <div className="main">
        <Header />
        <div className="containerOne">
          <Balance />
          <IncomeExpenses />
          <TransactionList />
          <AddTransaction />
        </div>
      </div>
    </GlobalProvider>
  );
};

export default Main;
