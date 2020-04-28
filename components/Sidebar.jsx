import React from "react";
import { Component } from "react";
import SingleChannel from "./SingleChannel";
import styled from "styled-components";
import UserMessage from "./UserMessage";

class Sidebar extends Component {
    constructor(props) {
        super(props);
        this.state = {channels: ["channel one", "channel 2"]};
    }
    render() {
        const { channels } = this.state;
        return (
            <SideNav>
                {
                    channels.map((oneChannel, i) => (
                        <SingleChannel channel={oneChannel} key={i}/>
                    ))
                }
            </SideNav>
        );
    }
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