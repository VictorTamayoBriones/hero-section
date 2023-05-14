import styled from 'styled-components';

export const ContainerCircles = styled.div`
    position: absolute;
    top: 8%;
    left: 3%;
    z-index: 3;
    animation: animationToFall 1.3s linear;
    
    @keyframes animationToFall{
        0%{
            top: -100vh;
        }
        100%{
            top: 40px;
        }
    }

    @media (max-width:1800px){
        left: -3%;
    }
`;