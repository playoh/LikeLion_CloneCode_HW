import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export class Dashboard extends Component {
  render() {
    return (
      <>
        
      </>
    );
  }
}

export default Dashboard;

const TotalDashboard = styled.div`
  gap: 5%;
`;

const Card = styled.div`
  display: flex;
  align-items: start;
  background-color: ${(props)=>props.onBeforeToggleColor};
  color: black;
  border: 1px solid black;
  height: 
`;