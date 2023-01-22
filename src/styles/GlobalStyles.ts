import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root{
        --color-grey-0: #000000;
        --color-grey-1: #b9b9b9;
        --color-grey-2: #d9d9d9;
        --color-grey-3: #ffffff;

        --color-shadow-1: #00000050;
        --color-shadow-2: #00000075;
        --color-shadow-3: #50505050;

        --color-scroll: #9d0b0b;
    }
    
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
