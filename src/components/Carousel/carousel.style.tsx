import styled from 'styled-components';

export const CarouselContainer = styled.article`
    width: 576px;
    height: 275px;
    position: absolute;
    
    bottom: 54px;
    z-index: 10;
    animation: animationToEnter 1.5s ease-in ;

    @keyframes animationToEnter {
        0%{
            transform: translateX(100vw);
        }
        100%{
            transform: translateX(0);
        }
    }
`;

export const CardsContainer = styled.div`
    width: 520px;
    overflow: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
`;

export const Cards = styled.div`
    width: max-content;
    height: max-content;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`;

export const ButtonActions = styled.div`
    display: flex;
    position: absolute;
    bottom: -3px;
    right: -10px;
    z-index: 11;
`;