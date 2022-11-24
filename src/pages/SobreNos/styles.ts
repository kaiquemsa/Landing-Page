import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  main {
    flex: 1;
  }

  h1{
    color: #d32034;
    font-size: 30px;
    font-weight: 700;
    margin: 20px 20px 0px 20px; 
  }
`;

export const BoxNew = styled.div`
  width: 100%;
  background-color: #D32034;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 80px;
  h1{
    margin-top: 120px;
    color: #fff;
    font-size: 38px;
    font-weight: 700;
  }
  h6{
    padding-top: 10px;
    font-size: 24px;
    font-weight: 500;
    color: #fff;
    margin-bottom: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;	

export const BoxInter = styled.div `
  width: 480px;
  height: 350px;
  background-color: #D32639;
  border-radius: 20px;
  text-align: justify;
  box-shadow: 0 6px 6px 0 rgba(45,39,44,1);
  margin-bottom: 50px;
  margin-top: 100px;
  h1 {
    color: #f2f4f3;
    font-size: 28px;
    font-weight: bold;
    margin: 25px;
  }
  h6 {
    color: #f2f4f3;
    font-size: 14px;
    font-weight: normal;
    margin: 25px;
  }

  @media (max-width: 768px) {
    width: 320px;
    height: 300px;
    margin-bottom: 0px;
    margin-top: 20px;

    h1 {
    color: #f2f4f3;
    font-size: 22px;
    font-weight: bold;
    padding: 16px;
    margin: 0px;
  }
    h6 {
      color: #f2f4f3;
      font-size: 12px;
      font-weight: normal;
      padding: 12px;
      margin: 0px;
  }
  }
  
`;

export const ContainerImage = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  width: 100%;

  img {
    width: 600px;
    height: 400px;
    margin: 20px;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    width: 100%;
    gap: 0px;
    flex-wrap: wrap;

    img {
      width: 300px;
      height: 250px;
    }
  }

`;
export const ContainerImage2 = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  .sliderimg{
    width: 80%;
    height: 100%;
    object-fit: contain;
    display: flex;
    justify-content: center;
  }
  @media (max-width: 768px){
    width:100%;
    .sliderimg{
    width: 80%;
    height: 100%;
    object-fit: contain;
    display: flex;
    justify-content: center;
  }
  }
`;

export const ContainerSecond = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  text-align: justify;
  main {
    flex: 1;
  }
  h1{
    color: #d32034;
    font-size: 38px;
    font-weight: 700;
    margin-top: 20px;
  }
  li {
    color: rgba(30, 37, 94, 0.7);
    font-size: 18px;
    font-weight: normal;
    text-align: start;
    margin: 20px;
  } 

  @media (max-width: 768px) {
    width: 100%;

    h1{
    color: #d32034;
    font-size: 30px;
    font-weight: 700;
    margin-top: 20px;
  }

  li {
    color: rgba(30, 37, 94, 0.7);
    font-size: 18px;
    font-weight: normal;
    text-align: start;
    margin-bottom: 20px;
    margin: 20px 0px 0px 20px;
  } 
  }
`;