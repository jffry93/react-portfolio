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

        --max-width: 1600px;

        --navbar-height: 10vh;
        --container-height: 90vh;

        --gap: 16px;


        font-family: 'Inter', sans-serif;
        background: #1b1b1b;
        overflow-x: hidden;
    }
    button {
        
        font-weight: bold;
        font-size: 1.1rem;
        cursor: pointer;
        padding: 1rem 2rem;
        border: 3px solid white;
        background: transparent;
        color: white;
        transition: all 0.5s ease;
        font-family: 'Inter', sans-serif;
        &:hover{
            background-color: white;
        }
        
    }
    h2{
        font-size: clamp(2.2rem, 1.7vw, 2.5rem);
        font-weight: 600;
        letter-spacing: 0px;
        line-height: 1.26;
    }
    h3{
        font-size: clamp(1.25rem, 1.2vw, 1.3rem);
        font-weight: 300;
        letter-spacing: 0px;
        line-height: 1.3;
    }
    h5{
        font-size: clamp(.9rem, .5vw, 1rem);
        font-weight: 300;
        letter-spacing: 0px;
        line-height: 1.26;
    }
    p{
        font-size: clamp(1.125rem, 1vw, 1.15rem);
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
