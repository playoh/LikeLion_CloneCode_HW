import React from "react";
import styled from "styled-components";
import { themeColors } from "../components/styles/StyledComponents";
import { useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars,faXmark, faUsers, faBell, faEye, faCircleDot, faGem, faLandmark, faClockRotateLeft, faGear } from '@fortawesome/free-solid-svg-icons';

const NoCenterHorizontalReverse = styled.div`
  background-color: ${themeColors.DARKCOLOR.color};
  display: flex;
  position:fixed;
  top: 0;
  align-items: center;
  flex-direction: row-reverse;
  width: 100%;
  height: 5vh;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const MenuIcon = styled.div`
  display: flex;
  justify-content: center;
  font-size: 120%;
  width: 10%;
`;

const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DesktopHeader = styled.div`
  display: flex;
  align-items: center;
`;
const Text = styled.div`
  display: flex;
  align-items: start;
`;

const MobileMenu = styled.div`
  position: fixed;
  top: 5vh;
  left: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;


function HeaderComponent(){
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleToggle = () => setMenuOpen((prev) => !prev);

  return(
    <header>
      <DesktopHeader>
        <Text>Logo</Text>
        {isMobile ? (
          <MenuIcon onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars}/>
          </MenuIcon>
            ) : (
              <MenuList>
                <li>Close Menu</li>
                <li>Overview</li>
                <li>Views</li>
                <li>Traffic</li>
                <li>Geo</li>
              </MenuList>
            )}
      </DesktopHeader>
      {isMobile && menuOpen && (
        <MobileMenu>
          <MenuIcon onClick={handleToggle}>
            <FontAwesomeIcon icon={faBars}/>
          </MenuIcon>
          <MenuList>
              <li>Close Menu</li>
              <li>Overview</li>
              <li>Views</li>
              <li>Traffic</li>
              <li>Geo</li>
            </MenuList>
        </MobileMenu>
      )}
    </header>
  );
};

export default HeaderComponent;

