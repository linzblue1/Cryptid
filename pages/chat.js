import React from 'react';
import styled from 'styled-components';
import Sidebar from '../components/Sidebar'


const ChatBox = () =>
    (
        <Wrapper>
            <Sidebar></Sidebar>
            <InnerBox>
                test 2
            </InnerBox>
            <h1>test</h1>
        </Wrapper>
    );

const Wrapper = styled.section`
padding: 4rem;
background: papayawhip;`

const InnerBox = styled.section`
height: 100vh;
width: 80vw;
background: gray;
padding-left: 30rem;
`

const MessageBox = styled.input`

`

export default ChatBox;