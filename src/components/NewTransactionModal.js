import { useRef, useState } from "react";
import { FormRadio } from "./FormRadio";
import { Dropdown } from "./Dropdown";
import { FormInput } from "./FormInput";
import { FormCheckbox } from "./FormCheckbox";

export function NewTransactionModal({
  categories,
  addTransaction,
  closeModal,
}) {
  const [selectedOption, setSelectedOption] = useState("expense");
  const categoryInput = useRef();
  const amountInput = useRef();
  const dateInput = useRef();
  const flaggedInput = useRef();
  const noteInput = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(new Date(dateInput.current.value));
    addTransaction(
      categoryInput.current.value,
      selectedOption,
      amountInput.current.value,
      noteInput.current.value,
      null,
      flaggedInput.current.value,
      dateInput.current.value
    );
    closeModal();
  }

  return (
    <div className="modal__new-transaction">
      <h1 className="page-title">New Transaction</h1>
      <form onSubmit={handleSubmit} className="form form--new-transaction">
        <div className="form__fields form__fields--new-transaction">
          <div id="new-transaction--type" className="radio">
            <FormRadio
              options={["Expense", "Income"]}
              name="category-type"
              label="Type"
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </div>

          <div id="new-transaction--category" className="form-container">
            <p className="label label--form">category</p>
            <Dropdown
              options={categories}
              classes="dropdown dropdown--form"
              name="category"
              ref={categoryInput}
            />
          </div>

          <div id="new-transaction--amount" className="form-container">
            <FormInput
              label="Amount"
              placeholder="$300"
              type="number"
              ref={amountInput}
            />
          </div>

          <div id="new-transaction--date" className="form-container">
            <FormInput
              label="Date"
              placeholder="01/01/2023"
              type="date"
              ref={dateInput}
            />
          </div>

          <div id="new-transaction--flag" className="form-container">
            <FormCheckbox ref={flaggedInput} label="flag?" name="flag" />
          </div>

          <div id="new-transaction--note" className="form-container">
            <FormInput
              label="Note"
              placeholder="Max 75 Characters"
              type="text"
              ref={noteInput}
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
            formAction="reset"
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
        className="modal__close-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm37.66,130.34a8,8,0,0,1-11.32,11.32L128,139.31l-26.34,26.35a8,8,0,0,1-11.32-11.32L116.69,128,90.34,101.66a8,8,0,0,1,11.32-11.32L128,116.69l26.34-26.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
      </svg>
    </div>
  );
}
