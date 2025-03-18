import React, { useEffect } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faUsers, faBell, faEye, faCircleDot, faGem, faLandmark, faClockRotateLeft, faGear  } from '@fortawesome/free-solid-svg-icons';


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


function MbHeader() {

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const hanndleToggle = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <header>
        <MobileHeader>
            <Text>Logo</Text>
            {isMobile ? (
              <MenuIcon onClick={hanndleToggle}>
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
          </MobileHeader>
        </header>
    </>
  );
}

export default MbHeader;