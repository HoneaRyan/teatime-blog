import { Container, TextField } from "@material-ui/core";
import React, { useState } from "react";
export default function Login() {
  // Potential refactoring???
  //
  // const useCreateInput = ({ type, name, label, variant }) => {
  //   const [value, setValue] = useState("");
  //   const input = (
  //     <TextField
  //       id={name}
  //       value={value}
  //       label={label}
  //       variant={variant}
  //       type={type}
  //       onChange={(e) => setValue(e.target.value)}
  //     />
  //   );
  //   return [value, input];
  // };

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
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
    </Container>
  );
}
