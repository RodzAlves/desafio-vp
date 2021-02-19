import styled from 'styled-components';

export const Container = styled.button`
  background: linear-gradient(225deg, #64fa9b 0%, #5fe36a 100%);
  color: #1a1a1a;
  height: 56px;
  border-radius: 10px;
  border: 0;
  padding: 0 16px;
  width: 100%;
  font-weight: 600;
  margin-top: 16px;
  transition: 0.3s;
  box-shadow: 0px 4px 25px -10px rgba(0, 0, 0, 0.8);

  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-left: 7px;
  }

  &:hover {
    background: linear-gradient(225deg, #59de8a 0%, #3cca70 100%);
  }
`;
