import React from "react";
import styled from "styled-components";
import Sidebar from "../components/Sidebar";

const ChatBox = () => (
  <Layout>
    <Wrapper>
      <Sidebar>
          
      </Sidebar>
      <InnerBox>

      </InnerBox>
      <h1>test</h1>
    </Wrapper>
  </Layout>
);

const Layout = styled.section`
  height: 100%;
  margin: 0;
  background: #7f7fd5;
  background: -webkit-linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  background: linear-gradient(to right, #91eae4, #86a8e7, #7f7fd5);
  height: 500px;
  border-radius: 15px !important;
  background-color: rgba(0, 0, 0, 0.4) !important;
`;

const Wrapper = styled.section`
  margin-top: auto;
  margin-bottom: auto;
  padding:  0.75rem 0 !important;
  overflow-y: auto;
  white-space: nowrap;
  border-radius: 15px 15px 0 0 !important;
  border-bottom: 0 !important;
}
`;

const InnerBox = styled.section`
  height: 100vh;
  width: 50vw;
  padding-left: 20rem;
`;

const MessageBox = styled.input``;

export default ChatBox;
