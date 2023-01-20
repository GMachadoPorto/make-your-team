import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ul{
        list-style: none;
    }

    button{
        cursor: pointer;
        border: none;
        background-color: transparent;
    }

    .container{
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    }
`;
