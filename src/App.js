import { useState } from "react";
import { StatusBar } from "./components/StatusBar";
import { ActionBar } from "./components/ActionBar/ActionBar";
import "./css/style.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { BudgetPage } from "./pages/BudgetPage";
import { Category, Transaction, ActionBarAction } from "./dataClasses";
import { ActionBarActions } from "./components/ActionBar/ActionBarActions";
import { BalanceTable } from "./components/BalanceTable";
import { GrowthTable } from "./components/GrowthTable";
import { SpendingSummaryTable } from "./components/SpendingSummaryTable";
import { SummaryTable } from "./components/SummaryTable";
import { Modal } from "./components/Modal";
import { NewCategoryModal } from "./components/NewCategoryModal";
import { TransactionsPage } from "./pages/TransactionsPage";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { useLocalStorageState } from "./hooks/useLocalStorageState";
import { calcDateDiff } from "./helpers";
import { ArchivePage } from "./pages/ArchivePage";
import { MessageModal } from "./components/MessageModal";
import uniqid from "uniqid";
import { SettingsPage } from "./pages/SettingsPage";

function App() {
  // ANCHOR state
  const [firstName, setFirstName] = useLocalStorageState("Lexie", "firstName");
  const [profilePicURL, setProfilePicURL] = useLocalStorageState(
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    "profilePicURL"
  );
  const [readOnly, setReadOnly] = useLocalStorageState(false, "readOnly");
  const [startingBalance, setStartingBalance] = useLocalStorageState(
    1000,
    "startingBalance"
  );
  const [modal, setModal] = useState(null);
  const [categories, setCategories] = useLocalStorageState(
    [
      new Category("rent", "expense", 750, "bill"),
      new Category("car payment", "expense", 500, "bill"),
      new Category("gas", "expense", 100, "necessity"),
      new Category("car insurance", "expense", 175, "bill"),
      new Category("groceries", "expense", 350, "necessity"),
      new Category("entertainment", "expense", 100, "discretionary"),
      new Category("subscriptions", "expense", 80, "discretionary"),
      new Category("paycheck", "income", 2750),
      new Category("freelance", "income", 1000),
    ],
    "categories"
  );
  const [transactions, setTransactions] = useLocalStorageState(
    [
      new Transaction("rent", "expense", 750, "July Rent"),
      new Transaction("car payment", "expense", 500),
      new Transaction("gas", "expense", 40, "Filled tank"),
      new Transaction("gas", "expense", 70, "Filled tank"),
      new Transaction("groceries", "expense", 120, "Walmart Trip"),
      new Transaction("groceries", "expense", 50, "Stuff for dinner"),
      new Transaction("entertainment", "expense", 45, "Date night"),
      new Transaction("paycheck", "income", 700),
      new Transaction("freelance", "income", 500, "Web design contract"),
    ],
    "transactions"
  );
  const [budgetPeriodStartState, setBudgetPeriodStartState] =
    useLocalStorageState(new Date("07/01/2023"), "budgetPeriodStart");
  const [budgetPeriodEndState, setBudgetPeriodEndState] = useLocalStorageState(
    null,
    "budgetPeriodEnd"
  );
  const budgetPeriodStart = new Date(budgetPeriodStartState);
  const budgetPeriodEnd = budgetPeriodEndState
    ? new Date(budgetPeriodEndState)
    : null;
  const budgetPeriodDuration = budgetPeriodEnd
    ? calcDateDiff(budgetPeriodStart, budgetPeriodEnd)
    : calcDateDiff(budgetPeriodStart, new Date());
  const [budgetArchive, setBudgetArchive] = useLocalStorageState(
    [],
    "budgetArchive"
  );
  const navigateTo = useNavigate();

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
  const budgetTableData = getBudgetTableData();
  const categoryNames = categories.map((cat) => cat.name);
  const location = useLocation();
  const pathName = location.pathname;

  function newBudgetPeriod() {
    const oldPeriodData = {
      startingBalance,
      endingBalance: balances.currentBalance,
      categories,
      transactions,
      budgetPeriodStart,
      budgetPeriodEnd: new Date(),
      id: uniqid(),
    };
    setBudgetArchive((archive) => {
      return [oldPeriodData, ...archive];
    });

    setStartingBalance(balances.currentBalance);
    setBudgetPeriodStartState(new Date());
    setTransactions([]);

    const successMessage = () => {
      openModal("new-period-success");
      setTimeout(closeModal, 2000);
    };

    successMessage();
  }

  function getBudgetPeriod(id) {
    // Sets read-only mode to true
    setReadOnly(true);
    // Saves current budget to LS
    const currentBudgetData = {
      startingBalance,
      categories,
      transactions,
      budgetPeriodStart,
    };
    window.localStorage.setItem(
      "currentBudgetData",
      JSON.stringify(currentBudgetData)
    );
    // Read requested budget period
    const budgetPeriodData = budgetArchive.find((item) => item.id === id);
    // Set requested budget period
    setStartingBalance(budgetPeriodData.startingBalance);
    setCategories(budgetPeriodData.categories);
    setTransactions(budgetPeriodData.transactions);
    setBudgetPeriodStartState(new Date(budgetPeriodData.budgetPeriodStart));
    setBudgetPeriodEndState(budgetPeriodData.budgetPeriodEnd);

    switchToReadOnly();
  }

  function switchToReadOnly() {
    navigateTo("/");
    openModal("switch-read-only");
    setTimeout(closeModal, 3000);
  }

  function returnToCurrentBudget() {
    setReadOnly(false);

    const currentBudgetData = JSON.parse(
      window.localStorage.getItem("currentBudgetData")
    );
    setStartingBalance(currentBudgetData.startingBalance);
    setCategories(currentBudgetData.categories);
    setTransactions(currentBudgetData.transactions);
    setBudgetPeriodStartState(new Date(currentBudgetData.budgetPeriodStart));
    setBudgetPeriodEndState(null);

    window.localStorage.removeItem("currentBudgetData");
  }

  function handleNewPeriodRequest() {
    if (budgetPeriodDuration.totalDays >= 7) {
      openModal("new-period");
    }
    if (budgetPeriodDuration.totalDays < 7) {
      openModal("new-period-not-allowed");
    }
  }

  function handleSetBudgetPeriodStart(date) {
    const inputDate = new Date(date + "T00:00:00");
    const formattedDate = inputDate.toDateString();
    if (inputDate > new Date()) return;
    setBudgetPeriodStartState(formattedDate);
  }

  function reset() {
    setCategories([]);
    setTransactions([]);
    setBudgetPeriodStartState(new Date());
    setBudgetPeriodEndState(null);
    setBudgetArchive([]);
    setStartingBalance(0);
    closeModal();
    navigateTo("/");
  }

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

  function deleteCategory(id) {
    const name = categories.find((cat) => cat.id === id).name;
    setCategories((cats) => cats.filter((cat) => cat.id !== id));
    setTransactions((trans) => trans.filter((tran) => tran.category !== name));
  }

  function deleteTransaction(ids) {
    setTransactions((trans) => trans.filter((tran) => !ids.includes(tran.id)));
  }

  function flagTransaction(id) {
    setTransactions(function (trans) {
      const transaction = trans.find((t) => t.id === id);
      const index = trans.indexOf(transaction);
      transaction.flagged = !transaction.flagged;

      const oldTransactions = trans.filter((tran) => tran.id !== id);
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
    setCategories((cats) => [new Category(name, type, budget, tag), ...cats]);
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
      new Transaction(
        category,
        type,
        Number(amount),
        note,
        receipt,
        flagged,
        new Date(date + "T00:00:00")
      ),
      ...cats,
    ]);
  }

  function openModal(modal) {
    setModal(modal);
  }

  function closeModal() {
    setModal(null);
  }

  return (
    <>
      <header>
        <StatusBar
          budgetPeriodStart={budgetPeriodStart}
          budgetPeriodEnd={budgetPeriodEnd}
          newBudgetPeriod={handleNewPeriodRequest}
          readOnly={readOnly}
          returnToCurrentBudget={returnToCurrentBudget}
        />
        <ActionBar
          firstName={firstName}
          profilePicURL={profilePicURL}
          navigateTo={navigateTo}
        >
          <ActionBarActions
            readOnly={readOnly}
            actions={[
              new ActionBarAction("New Transaction", () =>
                openModal("new-transaction")
              ),
              new ActionBarAction("New Category", () =>
                openModal("new-category")
              ),
            ]}
            returnToCurrent={returnToCurrentBudget}
            budgetPeriodStart={budgetPeriodStart}
            budgetPeriodEnd={budgetPeriodEnd}
          />
        </ActionBar>
      </header>
      <main>
        <div className="container">
          <Navbar pathName={pathName} />

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
                  readOnly={readOnly}
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
                  readOnly={readOnly}
                />
              }
            />
            <Route
              exact
              path="/archive"
              element={
                <ArchivePage
                  budgetArchive={budgetArchive}
                  onBudgetPeriod={getBudgetPeriod}
                  readOnly={readOnly}
                />
              }
            />
            <Route
              exact
              path="/settings"
              element={
                <SettingsPage
                  readOnly={readOnly}
                  onReset={() => openModal("reset")}
                  firstName={firstName}
                  onFirstName={setFirstName}
                  startingBalance={startingBalance}
                  onStartingBalance={setStartingBalance}
                  profilePicURL={profilePicURL}
                  onProfilePicURL={setProfilePicURL}
                  budgetPeriodStart={budgetPeriodStart}
                  onBudgetPeriodStart={handleSetBudgetPeriodStart}
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
      {modal === "new-period" ? (
        <Modal closeModal={closeModal}>
          <MessageModal
            message="You are about to start a new period. Once you begin a new budget period, all transactions and categories from the period will not be editable. All transactions will be cleared from your current period. You can access old periods in read-only mode from the archive tab."
            heading="Are you sure?"
            closeModal={closeModal}
            continueButton={true}
            callback={newBudgetPeriod}
            buttonText="Proceed"
          />
        </Modal>
      ) : null}
      {modal === "new-period-success" ? (
        <Modal closeModal={closeModal}>
          <MessageModal
            message="You have successfully started a new budget period. Transactions cleared and starting balance updated"
            heading="Success!"
            closeModal={closeModal}
            continueButton={false}
          />
        </Modal>
      ) : null}
      {modal === "new-period-not-allowed" ? (
        <Modal closeModal={closeModal}>
          <MessageModal
            message="Please try again when your current budget period has been active for at least 7 days"
            heading="Cannot Start New Period"
            closeModal={closeModal}
            continueButton={false}
          />
        </Modal>
      ) : null}
      {modal === "switch-read-only" ? (
        <Modal closeModal={closeModal}>
          <MessageModal
            message="You are now in read-only mode. You will be unable to edit data. To go back, click 'Back to Current' in header."
            heading="Read-Only Mode"
            closeModal={closeModal}
            continueButton={false}
          />
        </Modal>
      ) : null}
      {modal === "reset" ? (
        <Modal closeModal={closeModal}>
          <MessageModal
            message="Are you sure you want to reset? This will erase all history, transactions and categories along with resetting your start date and balance."
            heading="Reset?"
            closeModal={closeModal}
            continueButton={true}
            callback={reset}
            buttonText="Reset"
          />
        </Modal>
      ) : null}
    </>
  );
}

export default App;
