import { useRef, useState } from "react";
import { TableTaskBarButton } from "./TableTaskBarButton";
import { FormInput } from "./FormInput";

export function ChangeNameSetting({ firstName, onFirstName }) {
  const [isEditing, setIsEditing] = useState(false);
  const setNameInput = useRef();

  function handleNameChange() {
    onFirstName(setNameInput.current.value);
    setIsEditing(false);
  }

  return (
    <div className="settings__parameter">
      <p className="settings__parameter-current">First Name: {firstName}</p>
      {isEditing ? null : (
        <TableTaskBarButton text="Edit" callback={() => setIsEditing(true)} />
      )}
      {/* <form></form> */}
      {isEditing ? (
        <>
          <FormInput
            ref={setNameInput}
            className="text-field text-field--form"
            placeholder="Type new name"
            type="text"
          />
          <TableTaskBarButton text="Confirm" callback={handleNameChange} />{" "}
        </>
      ) : null}
    </div>
  );
}
