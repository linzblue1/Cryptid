import React from "react";
import { Component } from "react";
import styled from "styled-components";
import { signup } from "./userFunctions";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      query: "",
    };
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeQuery = this.onChangeQuery.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeUsername = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangeEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  onChangePassword = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  onChangeQuery = (e) => {
    this.setState({
      query: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log("hello");

    const newUser = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      query: this.state.query,
    };

    signup(newUser).then((res) => {
      console.log("Signed in");
    });
  };

  render() {
    return (
      <Wrapper>
        <TitleWrapper>
          <SignUpTitle>Signup</SignUpTitle>
        </TitleWrapper>
        <FormWrapper>
          <form onSubmit={this.onSubmit}>
            <HThree>E-mail:</HThree>
            <EmailInput
              type="text"
              placeholder="E-mail"
              onChange={this.onChangeEmail}
              value={this.state.email}
            ></EmailInput>
            <HThree>Username:</HThree>
            <UsernameInput
              type="text"
              placeholder="Username"
              onChange={this.onChangeUsername}
              value={this.state.username}
            ></UsernameInput>
            <br></br>
            <HThree>Password:</HThree>
            <PasswordInput
              type="text"
              placeholder="Password"
              onChange={this.onChangePassword}
              value={this.state.password}
            ></PasswordInput>
            <br></br>
            {/* <HThree>Confirm Password:</HThree>
          <PasswordMatchInput
            type="text"
            placeholder="Password-Confirm"
            onChange={this.onChangePassword}
            value={this.state.password}
          ></PasswordMatchInput> */}
            <br></br>
            <SignUpButton
              type="submit"
              value="Signup"
              className="signup-button"
            ></SignUpButton>
          </form>
          <br></br>
          <LoginPage href="/login">Looking for login?</LoginPage>
        </FormWrapper>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
  font-size: 45px;
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  margin: 0 auto;
  max-width: 500px;
  border-radius: 15px;
`;
const SignUpTitle = styled.h1`
  color: white;
  text-align: center;
  font-size: 300%;
  @media only screen and (min-width: 150px) and (max-width: 530px) {
    font-size: 200%;
    margin: 0;
  }
`;

const TitleWrapper = styled.div``;

const FormWrapper = styled.div`
  box-sizing: border-box;
  padding-top: 15px;
  padding-bottom: 10%;
  margin: 5% auto;
  text-align: center;
`;

const HThree = styled.h3`
  margin: 0;
  padding: 0;
  text-align: left;
  margin-left: 40px;
  color: white;
  font-size: 24px;
`;
const UsernameInput = styled.input`
  max-width: 400px;
  width: 80%;
  line-height: 3em;
  margin: 1em 2em;
  border-radius: 5px;
  border: 2px solid #f2f2f2;
  outline: none;
  padding-left: 10px;
`;
const EmailInput = styled.input`
  max-width: 400px;
  width: 80%;
  line-height: 3em;
  margin: 1em 2em;
  border-radius: 5px;
  border: 2px solid #f2f2f2;
  outline: none;
  padding-left: 10px;
`;
const PasswordInput = styled.input`
  max-width: 400px;
  width: 80%;
  line-height: 3em;
  margin: 1em 2em;
  border-radius: 5px;
  border: 2px solid #f2f2f2;
  outline: none;
  padding-left: 10px;
`;
// const PasswordMatchInput = styled.input`
//   max-width: 400px;
//   width: 80%;
//   line-height: 3em;
//   margin: 1em 2em;
//   border-radius: 5px;
//   border: 2px solid #f2f2f2;
//   outline: none;
//   padding-left: 10px;
// `;
const SignUpButton = styled.input`
  height: 30px;
  width: 100px;
  background: #fff;
  border: 1px solid #f2f2f2;
  border-radius: 20px;
  color: slategrey;
  text-transform: uppercase;
  font-family: "Ubuntu", sans-serif;
  cursor: pointer;
`;
const LoginPage = styled.a`
  color: #f2f2f2;
  cursor: pointer;
  text-decoration: underline;
  font-family: "Ubuntu", sans-serif;
  font-size: 18px;
`;

export default Signup;
