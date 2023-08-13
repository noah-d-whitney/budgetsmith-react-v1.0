import { ChangeNameSetting } from "../components/ChangeNameSetting";

export function SettingsPage({
  readOnly,
  firstName,
  onFirstName,
  startingBalance,
  onStartingBalance,
}) {
  return (
    <div className="container--view">
      <h1 className="page-title">Settings</h1>
      <ChangeNameSetting
        settingState={firstName}
        setSettingState={onFirstName}
        settingText="Name"
        placeholder="Type new name"
        inputType="text"
      />
      <ChangeNameSetting
        settingState={startingBalance}
        setSettingState={onStartingBalance}
        settingText="Starting Balance"
        placeholder="Enter Starting Balance"
        inputType="number"
      />
    </div>
  );
}
