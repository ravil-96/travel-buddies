import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { authList } from "../../api";
import Spinner from "react-bootstrap/Spinner";

function AuthRoute({ component: Component, ...rest }) {
  const [authed, setAuthed] = useState(false);
  const [loading, setLoading] = useState(true);

  const loggedIn = useSelector((state) => state.user.logged_in);
  const userId = useSelector((state) => state.user.id);

  const route = { ...rest };
  const holidayId = route.computedMatch.params.id;
  useEffect(() => {
    async function fetchAuthList(){
        const myAuthList = await authList(userId)
        if (myAuthList.indexOf(Number(holidayId)) !== -1) {
            setAuthed(true)
            setLoading(false)
        } else {
            setLoading(false)
        }
    }
    fetchAuthList()
  }, []);
  if (!loggedIn) {
      return(
    <Route
    render={() =>
      <Redirect to="/" />
    }
  /> 
      )   
  }
  else if (loading) {
    return (
      <div
        style={{
          display: "flex",
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner animation="border" variant="primary" role="status">
          {" "}
          <span className="sr-only">Loading...</span>
        </Spinner>
      </div>
    );
  } else {
    return (
      <Route
        {...rest}
        render={() =>
          !!authed ? <Component {...rest} /> : <Redirect to="/profile" />
        }
      />
    );
  }
}

export default AuthRoute;
