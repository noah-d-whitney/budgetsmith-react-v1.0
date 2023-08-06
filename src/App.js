import { useState } from "react";
import { StatusBar } from "./components/StatusBar";
import { ActionBar } from "./components/ActionBar";
import "./css/style.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { BudgetPage } from "./components/BudgetPage";
import { Category, Transaction } from "./dataClasses";

function App() {
  // ANCHOR state
  const [firstName, setFirstName] = useState("Lexie");
  const [startingBalance, setStartingBalance] = useState(1000);
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

  const balances = {
    startingBalance,
  };

  class ActionBarAction {
    constructor(action, onClick) {
      this.action = action;
      this.onClick = onClick;
    }
  }

  function test() {
    setFirstName((name) => name.toUpperCase());
  }

  return (
    <>
      <header>
        <StatusBar />
        <ActionBar
          firstName={firstName}
          actions={[
            new ActionBarAction("New Transaction", test),
            new ActionBarAction("New Category", test),
          ]}
        />
      </header>
      <main>
        <div className="container">
          <Navbar />

          <Routes>
            <Route exact path="/" element={<HomePage balances={balances} />} />
            <Route
              exact
              path="/budget"
              element={<BudgetPage categories={categories} />}
            />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
