// ANCHOR Category{}
export class Category {
  constructor(name, type, budget, tag) {
    this.type = type;
    this.name = name;
    this.budget = budget;
    this.tag = tag;
    this.dataType = "category";
    this.id = crypto.randomUUID();
  }
}

// ANCHOR Transaction{}
export class Transaction {
  constructor(category, type, amount, note, receipt) {
    this.type = type;
    this.amount = type === "expense" ? -amount : amount;
    this.category = category;
    this.note = note;
    this.receipt = receipt;
    this.date = new Date();
    this.id = crypto.randomUUID();
  }
}
