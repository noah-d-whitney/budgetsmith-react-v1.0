import { useState } from "react";
import { StatusBar } from "./components/StatusBar";
import { ActionBar } from "./components/ActionBar/ActionBar";
import "./css/style.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BudgetPage } from "./pages/BudgetPage";
import { Category, Transaction, ActionBarAction } from "./dataClasses";
import { ActionBarActions } from "./components/ActionBar/ActionBarActions";
import { BalanceTable } from "./components/BalanceTable";
import { GrowthTable } from "./components/GrowthTable";
import { SpendingSummaryTable } from "./components/SpendingSummaryTable";
import { SummaryTable } from "./components/SummaryTable";
import { Modal } from "./components/Modal";
import { NewCategoryModal } from "./components/newCategoryModal";
import { TransactionsPage } from "./pages/TransactionsPage";
import { NewTransactionModal } from "./components/NewTransactionModal";

function App() {
  // ANCHOR state
  const [firstName, setFirstName] = useState("Lexie");
  const [startingBalance, setStartingBalance] = useState(1000);
  const [modal, setModal] = useState(null);
  const [categories, setCategories] = useState([
    new Category("rent", "expense", 750, "bill"),
    new Category("car payment", "expense", 500, "bill"),
    new Category("gas", "expense", 100, "necessity"),
    new Category("car insurance", "expense", 175, "bill"),
    new Category("groceries", "expense", 350, "necessity"),
    new Category("entertainment", "expense", 100, "discretionary"),
    new Category("subscriptions", "expense", 80, "discretionary"),
    new Category("paycheck", "income", 2750),
    new Category("freelance", "income", 1000),
  ]);
  const [transactions, setTransactions] = useState([
    new Transaction("rent", "expense", 750, "July Rent"),
    new Transaction("car payment", "expense", 500),
    new Transaction("gas", "expense", 40, "Filled tank"),
    new Transaction("gas", "expense", 70, "Filled tank"),
    new Transaction("groceries", "expense", 120, "Walmart Trip"),
    new Transaction("groceries", "expense", 50, "Stuff for dinner"),
    new Transaction("entertainment", "expense", 45, "Date night"),
    new Transaction("paycheck", "income", 700),
    new Transaction("freelance", "income", 500, "Web design contract"),
  ]);

  // ANCHOR derived state
  const balances = {
    startingBalance,
    get plannedExpenses() {
      return calcBudget("planned", "expense");
    },
    get actualExpenses() {
      return calcBudget("actual", "expense");
    },
    get plannedIncome() {
      return calcBudget("planned", "income");
    },
    get actualIncome() {
      return calcBudget("actual", "income");
    },
    get currentBalance() {
      return calcCurrentBalance();
    },
    get expensesDifference() {
      return this.plannedExpenses - this.actualExpenses;
    },
    get incomeDifference() {
      return this.actualIncome - this.plannedIncome;
    },
    get saved() {
      return this.currentBalance - this.startingBalance;
    },
    get increase() {
      return (this.saved / this.startingBalance) * 100;
    },
  };
  console.log("Render");
  console.log("Planned Expenses", balances.plannedExpenses);
  console.log(categories);
  const budgetTableData = getBudgetTableData();
  const categoryNames = categories.map((cat) => cat.name);

  // ANCHOR calcCurrentBalance()
  function calcCurrentBalance() {
    return transactions.reduce(
      (total, transaction) => transaction.amount + total,
      balances.startingBalance
    );
  }

  // ANCHOR calcCategorySpend()
  function calcCategoryActual(category) {
    return transactions.reduce((total, transaction) => {
      if (transaction.category === category) {
        return total + Math.abs(transaction.amount);
      } else return total;
    }, 0);
  }

  // ANCHOR calcBudget()
  function calcBudget(calcType, transactionType) {
    if (calcType === "planned") {
      return Math.abs(
        categories.reduce(
          (total, category) =>
            category.type === transactionType ? total + category.budget : total,
          0
        )
      );
    }
    if (calcType === "actual") {
      return Math.abs(
        transactions.reduce(
          (total, transaction) =>
            transaction.type === transactionType
              ? total + Math.abs(transaction.amount)
              : total,
          0
        )
      );
    }
  }

  function getBudgetTableData() {
    const budgetTableData = categories.map((cat) => {
      const actual = calcCategoryActual(cat.name);
      const difference = actual - cat.budget;
      // cat.type === "expense" ? actual - cat.budget : cat.budget - actual;
      return {
        ...cat,
        actual,
        difference,
      };
    });

    return budgetTableData;
  }

  function deleteCategory(id, name) {
    setCategories((cats) => cats.filter((cat) => cat.id !== id));
    setTransactions((trans) => trans.filter((tran) => tran.category !== name));
    // TODO show modal
  }

  function deleteTransaction(ids) {
    setTransactions((trans) => trans.filter((tran) => !ids.includes(tran.id)));
    // TODO show modal
  }

  function flagTransaction(id) {
    setTransactions(function (trans) {
      const transaction = trans.find((t) => t.id === id);
      const index = trans.indexOf(transaction);
      transaction.flagged = !transaction.flagged;

      const oldTransactions = trans.filter((tran) => tran.id !== id);
      // const newTransactions = oldTransactions.splice(index, 0, transaction);
      // console.log("TEST", newTransactions);
      const newTransactions = [
        ...oldTransactions.slice(0, index),
        transaction,
        ...oldTransactions.slice(index),
      ];
      console.log(newTransactions);
      return newTransactions;
    });
  }

  function addCategory(name, type, budget, tag) {
    setCategories((cats) => [...cats, new Category(name, type, budget, tag)]);
  }

  function addTransaction(
    category,
    type,
    amount,
    note,
    receipt,
    flagged,
    date
  ) {
    setTransactions((cats) => [
      ...cats,
      new Transaction(category, type, amount, note, receipt, flagged, date),
    ]);
  }

  function openModal(modal) {
    setModal(modal);
  }

  function closeModal() {
    setModal(null);
  }

  function test() {
    setFirstName((name) => name.toUpperCase());
  }

  return (
    <>
      <header>
        <StatusBar />
        <ActionBar firstName={firstName}>
          <ActionBarActions
            actions={[
              new ActionBarAction("New Transaction", () =>
                openModal("new-category")
              ),
              new ActionBarAction("New Category", () =>
                openModal("new-category")
              ),
            ]}
          />
        </ActionBar>
      </header>
      <main>
        <div className="container">
          <Navbar />

          <Routes>
            <Route
              exact
              path="/"
              element={
                <HomePage>
                  <div className="container--3-cols">
                    <SummaryTable balances={balances} />
                    <BalanceTable balances={balances} />
                    <GrowthTable balances={balances} />
                  </div>
                  <div className="container--2-cols">
                    <SpendingSummaryTable budgetTableData={budgetTableData} />
                  </div>
                </HomePage>
              }
            />
            <Route
              exact
              path="/budget"
              element={
                <BudgetPage
                  tableData={budgetTableData}
                  onDeleteCategory={deleteCategory}
                  openModal={openModal}
                />
              }
            />
            <Route
              exact
              path="/transactions"
              element={
                <TransactionsPage
                  transactions={transactions}
                  onDeleteTransaction={deleteTransaction}
                  onFlagTransaction={flagTransaction}
                  categoryNames={categoryNames}
                  openModal={openModal}
                />
              }
            />
          </Routes>
        </div>
      </main>
      {modal === "new-category" ? (
        <Modal closeModal={closeModal}>
          <NewCategoryModal addCategory={addCategory} closeModal={closeModal} />
        </Modal>
      ) : null}
      {modal === "new-transaction" ? (
        <Modal closeModal={closeModal}>
          <NewTransactionModal
            addTransaction={addTransaction}
            closeModal={closeModal}
            categories={categoryNames}
          />
        </Modal>
      ) : null}
    </>
  );
}

export default App;
