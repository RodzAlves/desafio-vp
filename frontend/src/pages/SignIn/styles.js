import styled, { keyframes } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;

  img {
    width: 40%;
    margin-bottom: -20px;
  }
`;

const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  animation: ${appearFromLeft} 1s;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 30px;
      font-weight: bold;
      color: #f4ede0;
    }
  }
  > a {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  a {
    color: #f4ede8;
    display: block;
    text-decoration: none;
    margin-top: 20px;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    transition: color 0.2s;
    font-size: 20px;

    &:hover {
      color: '#f4ede0';
    }

    svg {
      margin-right: 16px;
    }
  }
`;
