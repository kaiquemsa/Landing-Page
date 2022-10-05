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
    align-items: center;
    display: flex;
    max-width: 1000px;
  }
`;
