import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./Components/Decisive-Chat-Logo.svg";
import "./Login.css";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";

export default function Login() {
  const PrivateKey = "DecisiveChat";

  const [keyinput, setKeyinput] = useState("");

  const check_key = PrivateKey === keyinput;

  const press_key_button = (event) => {
    // all the logic
    event.preventDefault();
  };

  return (
    <>
      <div className="Login_Screen">
        <div className="Login_header">
          <img src={Logo} alt="Decisive-Chat-Logo" />
          <h1>Welcome to Decisive Chat</h1>
        </div>

        <div className="input_containerR">
          <form className="">
            <FormControl className="">
              <InputLabel>Enter Private Key</InputLabel>
              <Input
                className="app__inputR"
                type="password"
                value={keyinput}
                onChange={(event) => setKeyinput(event.target.value)}
              />

              <Button
                className="key_button"
                disabled={!check_key}
                onClick={press_key_button}
                variant="contained"
                color="primary"
                type="submit"
              >
                <Link className="button_link" to="/chat">
                  {" "}
                  Get Started{" "}
                </Link>
              </Button>
            </FormControl>
          </form>
        </div>
        <div className="Login_footer">
          <span className="Login_footer_item">
            <Link className="Login_footer_item_link" to="/about">
              {" "}
              About US{" "}
            </Link>{" "}
          </span>
          <span className="Login_footer_item">
            <Link className="Login_footer_item_link" to="/contact">
              {" "}
              Contact US{" "}
            </Link>{" "}
          </span>
          <span className="Login_footer_item">
            <Link className="Login_footer_item_link" to="/privacy">
              {" "}
              Privacy Policy{" "}
            </Link>{" "}
          </span>
        </div>
      </div>
    </>
  );
}
