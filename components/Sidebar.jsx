import React from "react";
import { Component } from "react";
import SidebarUser from "./SidebarUser";
import styled from "styled-components";

class Sidebar extends Component {
  render() {
    return (
      <SideNav>
        <SidebarUser />
        <SidebarUser />
        <SidebarUser />
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
`;

export default Sidebar;
