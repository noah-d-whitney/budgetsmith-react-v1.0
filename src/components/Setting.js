import { useRef, useState } from "react";
import { TableTaskBarButton } from "./TableTaskBarButton";
import { FormInput } from "./FormInput";

export function Setting({
  settingText,
  settingState,
  setSettingState,
  placeholder,
  inputType,
}) {
  const [isEditing, setIsEditing] = useState(false);
  const setInput = useRef();

  function handleChange() {
    const value =
      inputType === "number"
        ? setInput.current.valueAsNumber
        : setInput.current.value;
    setSettingState(value);
    setIsEditing(false);
  }

  return (
    <div className="settings__parameter">
      <p className="settings__parameter-current">
        {settingText}:{" "}
        {settingState.toString().length >= 30
          ? settingState.toString().slice(0, 30) + "..."
          : settingState}
      </p>
      {isEditing ? null : (
        <TableTaskBarButton text="Edit" callback={() => setIsEditing(true)} />
      )}
      {/* <form></form> */}
      {isEditing ? (
        <form className="settings__form" onSubmit={handleChange}>
          <FormInput
            ref={setInput}
            className="text-field"
            placeholder={placeholder}
            type={inputType}
            required={true}
          />
          <TableTaskBarButton text="Confirm" formAction={"submit"} />
          <TableTaskBarButton
            text="Cancel"
            formAction={"reset"}
            callback={() => setIsEditing(false)}
          />
        </form>
      ) : null}
    </div>
  );
}
