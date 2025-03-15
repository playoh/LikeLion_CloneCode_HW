import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

export class Dashboard extends Component {
  render() {
    return (
      <>
        <h3>My Dashboard</h3>
        <TotalDashboard>
          <Card>
            <p>Messages</p>
            <p>52</p>
          </Card>
          <Card>
            <p>Views</p>
            <p>99</p>
          </Card>
          <Card>
            <p>Shares</p>
            <p>23</p>
          </Card>
          <Card>
            <p>Users</p>
            <p>50</p>
          </Card>
        </TotalDashboard>
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
`;