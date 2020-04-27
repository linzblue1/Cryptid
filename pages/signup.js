import React from "react";
import Signup from "../components/Signup";
import axios from "axios";

const SignupBox = () => {
  // axios
  //   .get("http://localhost:3001/users")
  //   .then((response) => response.data)
  //   .then((response) => setTestApi(response));
  return (
    <>
      {/* <p>{testApi}</p> */}
      <div>
        <Signup />
      </div>
    </>
  );
};

export default SignupBox;
