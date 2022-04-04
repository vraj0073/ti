import React from "react";
import { Button, Container } from "react-bootstrap";
import "../css/Login.css";
import NavigationBar from "./NavigationBar";

export const Login = () => {
  return (
    <>
      <Container className="logincontainer">
        <form>
          <h2 className="heading">Login</h2>
          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>
          <br></br>
          <div className="form-group" id="password_id">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter Password"
            />
          </div>
          <br></br>
          <div>
            <Button type="button" id="buttonlogin">
              Submit
            </Button>
            <> </>
            <a id="link" href="Forgetpassword">
              Forget Password?
            </a>
          </div>
        </form>
      </Container>
    </>
  );
};

export default Login;
