import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    > div {
        width: 50%;
    }

    h1 {
        color: #D32034;
        font-size: 56px;
        font-weight: bold;
    }

    h6{
        color: rgba(30, 37, 94, 0.7);
        font-size: 16px;
        font-weight: normal;
        padding-right: 150px;
        margin-top: 25px;
    }
`;

export const ColumnImage = styled.div `
    text-align: right;
    position: relative;
    img {
        margin-left: 108px;
    }
`;