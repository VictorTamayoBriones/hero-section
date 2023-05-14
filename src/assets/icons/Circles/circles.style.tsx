import styled from 'styled-components';

export const ContainerCircles = styled.div`
    position: absolute;
    top: 40px;
    left: 24px;
    z-index: 3;
    animation: animationToFall 1.8s linear;
    
    @keyframes animationToFall{
        0%{
            top: -100vh;
        }
        100%{
            top: 40px;
        }
    }
`;