import { useRef, useState } from "react";
import { Dropdown } from "./Dropdown";
import { FormInput } from "./FormInput";
import { FormRadio } from "./FormRadio";

export function NewCategoryModal({ addCategory, closeModal }) {
  const categoryBudgetInput = useRef();
  const categoryNameInput = useRef();
  const categoryTagInput = useRef();
  const [selectedOption, setSelectedOption] = useState("income");

  function handleSubmit(e) {
    e.preventDefault();
    addCategory(
      categoryNameInput.current.value,
      selectedOption,
      Number(categoryBudgetInput.current.value),
      categoryTagInput.current.value
    );
    closeModal();
  }

  return (
    <div className="modal__new-category">
      <h1 className="page-title">New Category</h1>
      <form onSubmit={handleSubmit} className="form form--new-transaction">
        <div className="form__fields form__fields--new-category">
          <FormRadio
            options={["Expense", "Income"]}
            name="category-type"
            label="Type"
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />

          <FormInput
            label="Budget"
            placeholder="$300"
            type="number"
            ref={categoryBudgetInput}
          />
          <FormInput
            label="Name"
            placeholder="Groceries"
            type="text"
            ref={categoryNameInput}
          />

          <div id="new-category--priority" className="form-container">
            <p className="label label--form">tag</p>
            <Dropdown
              options={["Bill", "Necessity", "Discretionary"]}
              classes="dropdown dropdown--form"
              name="tag"
              ref={categoryTagInput}
            />
          </div>
        </div>

        <div className="form__btns">
          <button formAction="submit" className="btn btn--task">
            <span>Create</span>
            <svg
              className="btn--task-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path d="M208,32H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM168,136H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path>
            </svg>
          </button>
          <button
            type="reset"
            onClick={() => closeModal()}
            className="btn btn--task btn--task--cancel"
          >
            <span>Cancel</span>
            <svg
              className="btn--task-icon"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 256 256"
            >
              <path d="M216,48H176V40a24,24,0,0,0-24-24H104A24,24,0,0,0,80,40v8H40a8,8,0,0,0,0,16h8V208a16,16,0,0,0,16,16H192a16,16,0,0,0,16-16V64h8a8,8,0,0,0,0-16ZM112,168a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm48,0a8,8,0,0,1-16,0V104a8,8,0,0,1,16,0Zm0-120H96V40a8,8,0,0,1,8-8h48a8,8,0,0,1,8,8Z"></path>
            </svg>
          </button>
        </div>
      </form>
      <svg
        onClick={() => closeModal()}
        className="modal__close-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
      </svg>
    </div>
  );
}
