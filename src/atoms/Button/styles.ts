import styled from "styled-components";

export const Container = styled.button`
    width: 130px;
    height: 42px;
    border: 1px solid #17a4d0;
    font-size: 14px;
    margin-left: 25px;
    border-radius: 5px;
    transition: all 0.25s ease-out;
    display: block;
    position: relative;


    &::before {  
    transform: scaleX(0);
    transform-origin: bottom right;
    }

    &:hover::before {
    transform: scaleX(1);
    transform-origin: bottom left;
    }

    &:hover {
        color: #ffff
    }

    &::before {
    content: " ";
    display: block;
    position: absolute;
    inset: 0 0 0 0;
    background: hsl(200 100% 80%);
    z-index: -1;
    transition: transform .3s ease;
    width: 130px;
    height: 42px;
    border-radius: 4px;
    background-color: #17A4D0;
    }
`;