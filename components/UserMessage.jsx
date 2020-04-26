import React, { Component } from 'react'
import styled from "styled-components";


const UserMesssage = () => {
    return (
        <div>
            <div>
                {
                    [{ from: 'user', msg: 'donkey' }].map((chat, i) => (
                        <UserMessageWrapper> <UserName><p>{chat.from}</p></UserName><UserMessageStyle><p>{chat.msg}</p></UserMessageStyle></UserMessageWrapper>
                    ))
                }
            </div>
        </div>
    )
}

const UserName = styled.div`
color: white;
height: 50px;
width: 50px;
`

const UserMessageWrapper = styled.div`
display: flex;
height: 80px;
width: 500px;
color: white;
`

const UserMessageStyle = styled.div`
color: white;
`
export default UserMesssage;