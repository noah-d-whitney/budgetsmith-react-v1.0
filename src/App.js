import { useState } from "react";
import { StatusBar } from "./components/StatusBar";
import { ActionBar } from "./components/ActionBar";

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
    </>
  );
}

export default App;
