import { useRef, useState } from "react";
import { TableTaskBarButton } from "./TableTaskBarButton";
import { FormInput } from "./FormInput";

export function ChangeNameSetting({
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
        {settingText}: {settingState}
      </p>
      {isEditing ? null : (
        <TableTaskBarButton text="Edit" callback={() => setIsEditing(true)} />
      )}
      {/* <form></form> */}
      {isEditing ? (
        <>
          <FormInput
            ref={setInput}
            className="text-field"
            placeholder={placeholder}
            type={inputType}
          />
          <TableTaskBarButton text="Confirm" callback={handleChange} />
          <TableTaskBarButton
            text="Cancel"
            callback={() => setIsEditing(false)}
          />
        </>
      ) : null}
    </div>
  );
}
