import styled from 'styled-components';

export const CarouselContainer = styled.article`
    width: 576px;
    height: 275px;
    position: absolute;
    bottom: 54px;
    z-index: 10;
`;

export const CardsContainer = styled.div<any>`
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