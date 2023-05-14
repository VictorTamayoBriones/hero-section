import styled from 'styled-components';


export const HeroContainer = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 133px 150px;
    display: flex;
    justify-content: space-between;

    .left{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .right{
        width: 50%;
        height: 100%;
        position: relative;

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            position: relative;
            z-index: 2;
        }

        svg{
            &:nth-child(1){
                position: absolute;
                top: 40px;
                left: 24px;
                z-index: 3;
            }

            &:nth-child(3){
                position: absolute;
                bottom: -24px;
                right: 45px;
            }

        }
    }
`;