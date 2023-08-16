import { Setting } from "../components/Setting";
import { TableTaskBarButton } from "../components/TableTaskBarButton";
import { formatDate } from "../helpers";

export function SettingsPage({
  readOnly,
  onReset,
  firstName,
  onFirstName,
  profilePicURL,
  onProfilePicURL,
  startingBalance,
  onStartingBalance,
  budgetPeriodStart,
  onBudgetPeriodStart,
}) {
  return (
    <div className="container--view">
      <h1 className="page-title">Settings</h1>
      {readOnly ? (
        <p>
          You cannot edit settings in read-only mode. Please return to current
          period to edit
        </p>
      ) : (
        <>
          {" "}
          <div className="settings__container">
            <Setting
              settingState={firstName}
              setSettingState={onFirstName}
              settingText="Name"
              placeholder="Type new name"
              inputType="text"
            />
            <Setting
              settingState={profilePicURL}
              setSettingState={onProfilePicURL}
              settingText="Profile Picture URL"
              placeholder="Enter URL"
              inputType="url"
            />
            <Setting
              settingState={startingBalance}
              setSettingState={onStartingBalance}
              settingText="Starting Balance"
              placeholder="Enter Starting Balance"
              inputType="number"
            />
            <Setting
              settingState={formatDate(budgetPeriodStart)}
              setSettingState={onBudgetPeriodStart}
              settingText="Budget Period Start Date"
              placeholder="Enter date"
              inputType="date"
            />
          </div>
          <TableTaskBarButton text="Reset All" callback={onReset} />{" "}
        </>
      )}
    </div>
  );
}
