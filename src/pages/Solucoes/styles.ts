import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  flex:1;
  background-color: #7b2cbf;
  h1{
    color: #d32034;
    font-size: 48px;
    font-weight: 700;
    max-width: 1000px;
    margin-top: 20px;
  }
  h6{
    padding-top: 10px;
    font-size: 24px;
    font-weight: 500;
    max-width: 1000px;
  }
  li {
    color: rgba(30, 37, 94, 0.7);
    font-size: 18px;
    font-weight: normal;
    text-align: start;
    max-width: 60%;
    margin-bottom: 20px;
    margin-top: 20px;
  }
`;

export const BoxNew = styled.div`
  width: 100%;
  height: 100%;
  background-color: "purple";
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 120px;
  h1{
    color: #fff;
    font-size: 48px;
    font-weight: 700;
    max-width: 1000px;
  }
  h6{
    padding-top: 10px;
    font-size: 16px;
    font-weight: 500;
    max-width: 500px;
    color: #fff;
    margin-bottom: 20px;
  }
`;	

export const BoxInter = styled.div `
  position: absolute;
  top: -32px;
  left: 50px;
  width: 500px;
  height: 400px;
  background-color: #9d4edd;
  border-radius: 20px;
  text-align: justify;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  margin-top: 150px;
  h1 {
    color: #f2f4f3;
    font-size: 34px;
    font-weight: bold;
    margin: 25px;
  }
  h6 {
    color: #f2f4f3;
    font-size: 16px;
    font-weight: normal;
    margin: 25px;
  }
  
`;

export const ContainerImage = styled.div` 
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  width: 1100px;
  max-width: 1100px;

`;