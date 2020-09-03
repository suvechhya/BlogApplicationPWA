import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";

function PrivateRoute({ children, ...rest }) {

    const fakeAuth = {
        isAuthenticated: false,
        authenticate(cb) {
          fakeAuth.isAuthenticated = true;
          setTimeout(cb, 100); // fake async
        },
        signout(cb) {
          fakeAuth.isAuthenticated = false;
          setTimeout(cb, 100);
        }
    };

    return (
      <Route
        {...rest}
        render={({ location }) =>
          fakeAuth.isAuthenticated ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }

  export default PrivateRoute;