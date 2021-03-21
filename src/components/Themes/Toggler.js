import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components'
import SolarSystem from '../../assets/svg/solar-system.svg';
import HalfMoon from '../../assets/svg/half-moon.svg';

const ToggleContainer = styled.button`
  background: ${({ theme }) => theme.gradient};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  border-radius: 30px;
  cursor: pointer;
  display: flex;
  font-size: 0.5rem;
  justify-content: space-between;
  overflow: hidden;
  padding: 0.2rem;
  position: relative;
  width: 5.5rem;
  height: 2.5rem;

  img {
    height: auto;
    width: 2rem;
    transition: all 0.3s linear;
    
    // sun icon
    &:first-child {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(0)' : 'translateY(100px)'};
    }
    
    // moon icon
    &:nth-child(2) {
      transform: ${({ lightTheme }) => lightTheme ? 'translateY(-100px)' : 'translateY(0)'};
    }
  }
`;
const Toggle = ({theme,  toggleTheme }) => {
  const lightTheme = theme === 'light';
    return (
        <ToggleContainer lightTheme={lightTheme} onClick={toggleTheme} >
            <img src={SolarSystem}/>
            <img src={HalfMoon}/>
        </ToggleContainer>
    );
};

Toggle.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Toggle;
