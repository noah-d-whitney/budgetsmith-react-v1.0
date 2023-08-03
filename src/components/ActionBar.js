import "../css/style.css";
import { ActionBarActions } from "./ActionBarActions";

export function ActionBar({ firstName, actions }) {
  return (
    <div className="action-bar">
      <div className="action-bar__container">
        <img
          src={require("../img/profile-placeholder.jpg")}
          alt="profile"
          className="action-bar__profile-picture"
          role="button"
        />
        <h2 className="action-bar__message">Welcome back, {firstName}!</h2>
      </div>
      <div className="action-bar__container">
        <ActionBarActions actions={actions} />
      </div>
    </div>
  );
}
