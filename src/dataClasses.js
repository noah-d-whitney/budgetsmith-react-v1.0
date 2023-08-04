// ANCHOR Category{}
export class Category {
  constructor(name, type, budget, tag) {
    this.type = type;
    this.name = name;
    this.budget = type === "expense" ? -budget : budget;
    this.tag = tag;
    this.dataType = "category";
    this.id = crypto.randomUUID();
  }
}
