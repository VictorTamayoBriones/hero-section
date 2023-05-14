import styled from 'styled-components';

export const SquareContainer = styled.div` 
    position: absolute;
    bottom: -32px;
    right: 45px;
    animation: animationToUp 1.3s linear;

    @keyframes animationToUp {
        0%{
            bottom: -100vh;
        }
        100%{
            bottom: -32px;
        }
    }

    @media (max-width:1200px){
        right: -24px;
    }

`;