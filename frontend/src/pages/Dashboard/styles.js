import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  grid-gap: 32px;

  @media (max-width: 820px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Card = styled.div`
  background: ${(props) =>
    props.deleted
      ? 'linear-gradient(225deg, #ED213A 0%, #93291E 100%)'
      : 'linear-gradient(225deg, #64fa9b 0%, #5fe36a 100%)'};
  padding: 22px 32px;
  border-radius: 5px;
  color: ${(props) => (props.deleted ? '#f4ede0' : '#0d1b2a')};
  cursor: pointer;
  transition: 0.4s;
  height: 120px;

  &:hover {
    transform: translateX(10px);
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
      font-size: 16px;
      font-weight: bold;
    }
  }

  h1 {
    margin-top: 14px;
    font-size: 36px;
    font-weight: normal;
    line-height: 54px;
  }
`;

export const TableContainer = styled.section`
  margin-top: 64px;

  table {
    width: 100%;
    border-spacing: 0 8px;

    th {
      color: #3cca70;
      font-weight: normal;
      padding: 20px 25px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;

      transition: 0.4s;

      &:hover {
        transform: translateX(10px);
      }
    }

    td {
      padding: 20px 25px;
      border: 0;
      background: #223843;
      font-size: 16px;
      font-weight: normal;
      color: #f4ede0;
    }

    td:first-child {
      border-radius: 8px 0 0 8px;
    }

    td:last-child {
      border-radius: 0 8px 8px 0;
    }

    @media (max-width: 600px) {
      max-width: 600px;
      th {
        padding: 10px 16px;
        height: 60px;
      }

      td {
        padding: 10px 10px;

        height: 60px;
      }
    }
  }
`;

export const ButtonOptions = styled.button`
  background: transparent;
  border: none;
  display: inherit;
  align-items: center;
  flex-direction: column;

  svg {
    margin-right: 6px;
    color: ${(props) => (props.delete ? '#ED213A' : '#3cca70')};
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
