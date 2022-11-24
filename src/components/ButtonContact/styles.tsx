import styled from "styled-components";

export const Container = styled.button`
  background-color: #d32034;
  border: 1px solid #d32034;
  color: #fff;
  font-size: 16px;
  font-weight: 600;
  width: 200px;
  height: 60px;
  border-radius: 100px;
  margin-top: 50px;
  transition: all 0.25s ease-out;

  &:hover {
    background-color: #f8fdff;
    color: #d32034;
  }


  @media (max-width: 768px) {
    width: 250px;
    height: 40px;
    margin-top: 10px;
  }

  
`;
