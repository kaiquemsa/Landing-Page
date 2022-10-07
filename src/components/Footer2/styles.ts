import styled from "styled-components";

export const Footage = styled.footer`
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: #f9f4f5;
    color: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 4px 6px 0 rgba(0,0,0,.4);
    h6{
        font-size: 16px;
    }
`;

export const Adress = styled.div `
    width:310px;
    height:80px;
    padding: 10px;
    display: flex;
    align-items: center;
    justify-content: start;
    box-shadow: 0;
    h1 {
        font-weight: 500;
        font-size: 8px;
    }
    a{
      padding-left: 50px;
    }
    
`;