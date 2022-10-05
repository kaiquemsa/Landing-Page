import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    flex: 1;
    /* justify-content: center; */
  }
`;

export const Main = styled.main`
  display: flex;
  flex: 1;
  flex-direction: row;

  align-items: center;
  max-width: 1000px;

  > div {
    width: 50%;
  }

  h1 {
    color: #d32034;
    font-size: 56px;
    font-weight: bold;
  }

  h6 {
    color: rgba(30, 37, 94, 0.7);
    font-size: 16px;
    font-weight: normal;
    padding-right: 150px;
    margin-top: 25px;
  }
`;

export const ColumnImage = styled.div`
  text-align: right;
  position: relative;
  img {
    margin-left: 108px;
  }
`;
