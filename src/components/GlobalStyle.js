import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        /* VARIABLES */
        --primary-text-color: #e1e1e1;
        --secondary-text-color: #a5a5a5;

        --max-width: 1200px;

        --navbar-height: 50px;
        --container-height: calc(100vh - var(--navbar-height));

        --gap: 16px;

        --layout-padding: 22px;
        --layout-secondary-padding: 34px;
        --mobile-padding: 12px;


        line-height: 1.47059;
        letter-spacing: -.022em;
        font-family: 'Inter', sans-serif;
        background: #1b1b1b;
        overflow-x: hidden;
    }
    button {
        cursor: pointer;
        width: fit-content ;

        font-weight: 700;
        font-size: 17px;
        padding: 1rem 1.5rem;
        border: 1.5px solid white;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover{
            background-color: white;
        }
        
    }
    h1{
        font-size: clamp(3.125rem, 8vw, 4rem);
        line-height: 1.07143;
        letter-spacing: -.005em;
    }
    h2{
        font-size: clamp(32px, 8vw, 56px);
        line-height: 1.07143;
        letter-spacing: -.005em;
    }
    h3{
        font-size: clamp(21px, 8vw, 28px);
        line-height: 1.14286;
        letter-spacing: .007em;
    }
    h5{
        font-size: clamp(.9rem, .5vw, 1rem);
        font-weight: 300;
        letter-spacing: 0px;
        line-height: 1.26;
    }
    p{
        font-size: clamp(17px, 1vw, 18px);
        font-weight: 300;
        line-height: 1.6;
        letter-spacing: 0px;
    }
    h1,h2,h3,h4,h5,p{
        color: white;
    }
    
/* 
    h2{
        font-weight: lighter;
        font-size: 4rem;
    }
    h3{
        color: white;
    }
    h4{
        font-weight: bold; 
        font-size: 2rem;    
    }
    a{
        font-size: 1.1rem;
    }
    span{
        font-weight: bold;
        color: #23d997;
    }
    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1.4rem;
        line-height: 150%;
    } */
`;

export default GlobalStyle;
