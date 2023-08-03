import { useState } from "react";
import { StatusBar } from "./components/StatusBar";
import { ActionBar } from "./components/ActionBar";
import "./css/style.css";
import { Navbar } from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { BudgetPage } from "./components/BudgetPage";

function App() {
  const [firstName, setFirstName] = useState("Lexie");

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
            <Route exact path="/" Component={HomePage} />
            <Route exact path="/budget" Component={BudgetPage} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
