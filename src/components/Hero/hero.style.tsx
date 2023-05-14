import styled from 'styled-components';


export const HeroContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 8.3rem 9.3rem;
    display: flex;
    justify-content: space-between;

    .left{
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .right{
        width: 50%;
        height: 100%;
        position: relative;
    }


    @media (max-width: 1200px){
        padding: 2.3rem 3.3rem;
    }
`;