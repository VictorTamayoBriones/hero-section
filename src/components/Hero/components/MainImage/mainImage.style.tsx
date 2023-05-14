import styled from 'styled-components';

export const MainImageContainer = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    z-index: 2;
    animation: toBottom 1s linear;


    @keyframes toBottom {
        0%{
            transform: translateY(-100%);
        }
        100%{
            transform: translateY(0);
        }
    }
`;