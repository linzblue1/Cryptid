import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";
import UserMessage from "../components/UserMessage";

import { Store, CTX } from '../components/Store'

const ChatBox = (props) => {
  const [textValue, changeTextValue] = React.useState('');

  const { state, sendChatAction, user } = React.useContext(CTX);
  console.log(state.allChats)



  const onKeyPressHandler = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      sendChatAction({ from: user, msg: textValue, })
      changeTextValue('')
    }
  }

  const onChangeHandler = e => {
    changeTextValue(e.target.value);
  }


  return (

    <Layout>
      <Sidebar/>
      <Wrapper>
        <InnerBoxWrapper>
          <InnerBox>
            <UserMessage />
            <input
              label="Send a chat"
              onChange={onChangeHandler}
              value={textValue}
              onKeyPress={onKeyPressHandler}
            />
          </InnerBox>
        </InnerBoxWrapper>
      </Wrapper>
    </Layout>
  )
}

const Layout = styled.section`
  height: 100vh;
  margin: 0;
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  border-radius: 15px !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
  display: flex;
`;

const Wrapper = styled.section`
  margin-top: auto;
  margin-bottom: auto;
  /* padding: 0.75rem 0 !important; */
  overflow-y: auto;
  white-space: nowrap;
  border-radius: 15px 15px 0 0 !important;
  border-bottom: 0 !important;
  width: 100%;
margin-left: 1vw;
margin-right: 15vw;
`;

const InnerBox = styled.section`
text-align: center;
width: 100%;
align-self: flex-end;
`;

const InnerBoxWrapper = styled.section`
  display: flex;
  height: 90vh;
  background: black;
  opacity: 0.5;

`;

const MessageBox = styled.input``;
export default (props) => <Store><ChatBox {...props} /></Store>