import styled from 'styled-components';
import { FiX } from 'react-icons/fi';

export const Container = styled.div`
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 600px;
  height: ${(props) => (props.edit ? '550px' : '700px')};
  padding: 40px 100px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #0d1b2a;
  color: #f4ede0;

  position: relative;
  z-index: 10;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin-bottom: 30px;
    text-align: center;
  }

  button {
    margin-top: 50px;
  }
`;

export const CloseButton = styled(FiX)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;
  color: #3cca70;
`;
