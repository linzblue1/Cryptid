import React from "react";
import SingleChannel from "./SingleChannel";
import styled from "styled-components";
import { Store, CTX } from './Store';
const Sidebar = () => {
    const { state, sendChatAction } = React.useContext(CTX);
    console.log(state);
    const channel = Object.keys(state.allChats);
    const selectedChannel = state.allChats[state.selectedChannel];
    
        return (
            <SideNav>
                {
                    channel.map((eaChannel, i) => (
                        <SingleChannel eachChannel={eaChannel} index={i}/>
                        ))
                }
            </SideNav>
        );
}


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