import styled from 'styled-components';

export const Container = styled.div`
  background: #223843;
  border-radius: 10px;
  padding: 16px;
  width: 100%;

  border: 2px solid #223843;
  color: #3cca70;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 10px;
  }

  input {
    background: transparent;
    flex: 1;
    border: 0;
    color: #f4ede8;

    &::placeholder {
      color: #3cca70;
    }
  }

  svg {
    margin-right: 16px;
  }

  span {
    color: #c53030;
  }
`;

export const Error = styled.div`
  display: flex;
  margin-bottom: 8px;
  align-items: center;

  span {
    color: #c53030;
    margin-left: 5px;
    font-size: 13px;
  }
`;
