import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled.div`
  padding: 40px 20px;

  header {
    max-width: 1120px;
    margin: 0 auto;
    display: flex;
    height: 60px;
    align-items: center;
    justify-content: space-between;
  }

  img {
    width: 20%;
  }

  nav {
    display: flex;

    a {
      transition: opacity 0.2s;
      position: relative;
      padding-bottom: 8px;

      &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        left: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(3px);
        background: #3cca70;
        transition: opacity 0.2s ease, transform 0.2s ease;
      }

      &:hover::after {
        opacity: 1;
        transform: translateY(0);
      }

      & + a {
        margin-left: 32px;
      }
    }
    button:nth-child(2),
    button:nth-child(3) {
      transition: opacity 0.2s;
      position: relative;
      padding-bottom: 8px;

      &::after {
        content: '';
        position: absolute;
        height: 2px;
        width: 100%;
        left: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(3px);
        background: #3cca70;
        transition: opacity 0.2s ease, transform 0.2s ease;
      }

      &:hover::after {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }
`;

export const StyledLink = styled(Link)`
  color: #f4ede8;
  text-decoration: none;
  font-size: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    color: #3cca70;
    margin-right: 7px;
  }
`;

export const StyledButton = styled.button`
  background: transparent;
  border: none;
  color: #f4ede8;
  text-decoration: none;
  font-size: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 32px;

  svg {
    color: #3cca70;
    margin-right: 7px;
  }
`;
