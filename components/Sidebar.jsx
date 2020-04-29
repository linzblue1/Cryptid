import React from "react";
import SingleChannel from "./SingleChannel";
import styled from "styled-components";
import { Store, CTX } from './Store';
const Sidebar = () => {
    const { state, sendChatAction } = React.useContext(CTX);
    console.log(state);
    const channel = Object.keys(state.allChats);
    const changeActiveChannel = (eaChannel) => {
        sendChatAction({type:"SET_SELECTED_CHANNEL", payload:eaChannel})
    }
        return (
            <SideNav>
                {
                    channel.map((eaChannel, i) => (
                        <SingleChannelWrapper key={i} onClick={() => {changeActiveChannel(eaChannel)}}>
                            <SingleChannel eachChannel={eaChannel} key={i}/>
                        </SingleChannelWrapper>
                        ))
                }
            </SideNav>
        );
}

const SingleChannelWrapper = styled.button`
    `

const SideNav = styled.div`
    display: flex;
    width: 240px;
    flex-direction: column;
    background: black;
    opacity: 0.5;
    border-radius: 15px !important;
    @media only screen and (min-width : 50px) and (max-width : 530px){
        margin: 0px;
        align-items: center;
    }
`;

export default Sidebar;