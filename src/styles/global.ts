import { createGlobalStyle } from "styled-components";

const globalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body, #root {
        height: 100%;        
        position: relative;
        padding-bottom: 100px;
    }

    body {
        font-family: 'Poppins', sans-serif;

    }

    button {
        background-color: transparent;
        font-family: 'Poppins', sans-serif;
        border: none;
        outline: none;
        color: #17a4d0;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        outline: none;
    }
`;

export default globalStyle;