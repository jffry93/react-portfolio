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
    .custom-card{
        padding: 1.5rem 1rem 2rem;
        background-color: #121212;
        border-radius: 16px;
    }
    button {
        cursor: pointer;
        width: fit-content ;

        font-weight: 700;
        font-size: 17px;
        padding: .7rem 1.4rem;
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
        font-size: clamp(3.125rem, 4vw, 4rem);
        line-height: 1.07143;
        letter-spacing: -.005em;
    }
    h2{
        font-size: clamp(32px, 4vw, 48px);
        /* font-weight: lighter; */
        line-height: 1.07143;
        letter-spacing: -.005em;
    }
    h3{
        font-size: clamp(21px, 4vw, 28px);
        line-height: 1.14286;
        letter-spacing: .007em;
    }
    h4{
        font-size: clamp(17px, 3vw, 23px);
        line-height: 1.14286;
        letter-spacing: .007em;
    }
    h5{
        font-size: clamp(.9rem, .5vw, 1rem);
        font-weight: 300;
        letter-spacing: 0px;
        line-height: 1.381;
    }
    p{
        font-size: clamp(17px, 1.2vw, 19px);
        font-weight: lighter;
        line-height: clamp(25.000032424926758px, .5vw, 29.001001358032227px);
        letter-spacing:  clamp(.011em, .5vw, .022em);
    }
    h1,h2,h3,h4,h5,p{
        color: white;
    }
    
`;

export default GlobalStyle;
