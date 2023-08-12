import { ChangeNameSetting } from "../components/ChangeNameSetting";

export function SettingsPage({ firstName, onFirstName }) {
  return (
    <div className="container--view">
      <h1 className="page-title">Settings</h1>
      <ChangeNameSetting firstName={firstName} onFirstName={onFirstName} />
    </div>
  );
}
