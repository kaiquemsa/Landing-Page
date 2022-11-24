import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: justify;
  flex:1;
  background: rgb(106,48,171);
  background: linear-gradient(rgba(106,48,171,1) 0%, rgba(136,47,242,1) 35%, rgba(139,46,251,1) 63%, rgba(199,48,188,1) 83%);

`;

export const BoxInter = styled.div `
  width: 500px;
  height: 400px;
  text-align: justify;
  background-color: #9c43f8;
  border-radius: 20px;
  box-shadow: 0 6px 6px 0 rgba(45,39,44,1);
  h1 {
    color: #f2f4f3;
    font-size: 34px;
    font-weight: bold;
    margin: 25px;
  }
  h6 {
    color: #f2f4f3;
    font-size: 20px;
    font-weight: normal;
    margin: 25px;
  }
  @media (max-width: 768px) {
    width: 300px;
    height: 200px;
    h1 {
    color: #f2f4f3;
    font-size: 18px;
    font-weight: bold;
    margin: 25px;
  }
  h6 {
    color: #f2f4f3;
    font-size: 12px;
    font-weight: normal;
    margin: 25px;
  }
}
`;

export const ContainerImage = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 100px;
  width: 100%;
  height: 100%;

  img {
    width: 400px;
    height: 400px;
    margin: 20px;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    gap:50px;
    padding-left: 10px;
    padding-right: 10px;

    img {
      width: 250px;
      height: 250px;
    }
  }

`;