export function ActionBar({ firstName, children, profilePicURL }) {
  return (
    <div className="action-bar">
      <div className="action-bar__container">
        <img
          src={profilePicURL}
          alt="profile"
          className="action-bar__profile-picture"
          role="button"
        />
        <h2 className="action-bar__message">Welcome back, {firstName}!</h2>
      </div>
      <div className="action-bar__container">{children}</div>
    </div>
  );
}
