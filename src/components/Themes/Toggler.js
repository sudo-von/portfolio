import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components'
import SolarSystem from '../../assets/svg/solar-system.svg';
import HalfMoon from '../../assets/svg/half-moon.svg';
/* Icons. */
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness2Icon from '@material-ui/icons/Brightness2';

const ToggleContainer = styled.button`
  background: ${({ theme: { toggler } }) => toggler.background_color};
  border: 2px solid ${({ theme: { toggler } }) => toggler.border_color};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.4rem;
  position: relative;
  width: 5.5rem;
  height: 2.5rem;

  svg {
    height: auto;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
      color: ${({ theme: { toggler } }) => toggler.color};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
      color: ${({ theme: { toggler } }) => toggler.color};
    }
  }
`;
const Toggle = ({theme,  toggleTheme }) => {
  const lightTheme = theme === 'light';
    return (
        <ToggleContainer lightTheme={lightTheme} onClick={toggleTheme} >
            <WbSunnyIcon/>
            <Brightness2Icon/>
        </ToggleContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
