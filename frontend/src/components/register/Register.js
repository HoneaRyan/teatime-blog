import React, { useState } from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export default function Register() {
  const registerOnClick = () => {
    return null;
  };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");

  return (
    <Container>
      <form>
        <TextField
          id="username"
          value={username}
          label="Username"
          variant="outlined"
          type="text"
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          id="password"
          value={password}
          label="Password"
          variant="outlined"
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          id="confirmPassword"
          value={confirmPassword}
          label="Confirm Password"
          variant="outlined"
          type="password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <TextField
          id="email"
          value={email}
          label="Email Address"
          variant="outlined"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="confirmEmail"
          value={confirmEmail}
          label="Confirm Email Address"
          variant="outlined"
          type="email"
          onChange={(e) => setConfirmEmail(e.target.value)}
        />
        <Button label="submit" type="submit" onClick={() => registerOnClick}>
          Register
        </Button>
      </form>
    </Container>
  );
}
