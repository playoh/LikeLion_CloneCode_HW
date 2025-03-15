import React from "react";
import styled from "styled-components";


const Header = () => {
  return(
    <>
      <div>
        <p>Logo</p>
        <p>Menu</p>
      </div>

    </>
  );
};

export default Header;

const NavBtn = styled.div`
  display: flex;
  display-direction: start;
  color: black;
`;