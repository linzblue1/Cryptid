import React from "react";
import Login from "../components/Login";
import axios from "axios";


const LoginBox = (props) => {
  const [testApi, setTestApi] = React.useState('');
  axios
    .get("http://localhost:3001/users")
    .then((response) => response.data)
    .then((response) => setTestApi(response));
  return (
    <>
      <p>{testApi}</p>
      <div>
        <Login />
      </div>
    </>
  );
};

export default LoginBox;
