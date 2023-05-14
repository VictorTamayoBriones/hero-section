import styled from 'styled-components';

export const SquareContainer = styled.div` 
    position: absolute;
    bottom: -32px;
    right: 45px;
    animation: animationToUp 1.5s ease-in-out;

    @keyframes animationToUp {
        0%{
            bottom: -100vh;
        }
        100%{
            bottom: -32px;
        }
    }
`;