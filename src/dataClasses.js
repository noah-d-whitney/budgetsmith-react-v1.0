import uniqid from "uniqid";

// ANCHOR Category{}
export class Category {
  constructor(name, type, budget, tag) {
    this.type = type;
    this.name = name;
    this.budget = budget;
    this.tag = tag;
    this.dataType = "category";
    this.id = uniqid();
  }
}

// ANCHOR Transaction{}
export class Transaction {
  constructor(
    category,
    type,
    amount,
    note,
    receipt,
    flagged = false,
    date = new Date()
  ) {
    this.type = type;
    this.amount = type === "expense" ? -amount : amount;
    this.category = category;
    this.note = note;
    this.receipt = receipt;
    this.date = new Date(date);
    this.id = uniqid();
    this.flagged = flagged;
  }
}

// ANCHOR ActionBarAction
export class ActionBarAction {
  constructor(action, onClick) {
    this.action = action;
    this.onClick = onClick;
  }
}
