import React from "react";
import ReactDOM from "react-dom";

const Info = props => (
  <div>
    <h1>Info</h1>
    <p>The info is: {props.info}</p>
  </div>
);

// Higher Order Component
const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info.Please don.t share it.</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const requireAuthentication = WrappedComponent => {
  return props => (
    <div>
      {props.isAutheticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Please login to view the info.</p>
      )}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo info="These are the details" isAdmin={false} />,
//   document.getElementById("app")
// );
ReactDOM.render(
  <AuthInfo info="These are the details" isAutheticated={false} />,
  document.getElementById("app")
);
