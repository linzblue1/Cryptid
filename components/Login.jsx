import React from "react";
import { Component } from "react";
import styled from "styled-components";


class Login extends Component {
    render() {
        return (
            <Wrapper>
                <TitleWrapper>
                    <LoginTitle>Login</LoginTitle>
                </TitleWrapper>
                <FormWrapper>
                    <HThree>Username:</HThree>
                    <UsernameInput type="text" placeholder="Username"></UsernameInput><br></br>
                    <HThree>Password:</HThree>
                    <PasswordInput type="text" placeholder="Password"></PasswordInput><br></br>
                    <LoginButton type="button" value="Login" className="login-button"></LoginButton><br></br>
                    <SignUp href="#">Sign up!</SignUp>
                    <HSix>Can't access your account?</HSix>
                </FormWrapper>
            </Wrapper>
        )
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
`
const LoginTitle = styled.h1`
    color: white;
    text-align: center;
    font-size: 300%;
`

const TitleWrapper = styled.div`
`

const FormWrapper = styled.div`
    box-sizing: border-box;
    padding-top: 15px;
    padding-bottom: 10%;
    margin: 5% auto;
    text-align: center;
`

const HThree = styled.h3`
    margin: 0;
    padding: 0;
    text-align: left;
    margin-left: 40px;
    color: white;
`
const UsernameInput = styled.input`
    max-width: 400px;
    width: 80%;
    line-height: 3em;
    margin: 1em 2em;
    border-radius: 5px;
    border: 2px solid #f2f2f2;
    outline: none;
    padding-left: 10px;
` 
const PasswordInput = styled.input`
    max-width: 400px;
    width: 80%;
    line-height: 3em;
    margin: 1em 2em;
    border-radius: 5px;
    border: 2px solid #f2f2f2;
    outline: none;
    padding-left: 10px;
`
const LoginButton = styled.input`
    height:30px;
    width:100px;
    background:#fff;
    border:1px solid #f2f2f2;
    border-radius:20px;
    color: slategrey;
    text-transform:uppercase;
    font-family: 'Ubuntu', sans-serif;
    cursor:pointer;
`
const SignUp = styled.a`
    color:#f2f2f2;
    margin-left: -50%;
    cursor:pointer;
    text-decoration:underline;
`
const HSix= styled.h6`
    margin: 0;
    padding: 0;
    color: white;
    text-decoration: underline;
    cursor: pointer;
    text-align: left;
    margin-left: 40px;
`


export default Login;