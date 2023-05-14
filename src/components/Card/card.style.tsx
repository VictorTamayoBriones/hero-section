import styled from 'styled-components';
import { theme } from '../../theme';

export const CardContainer = styled.article`
    width: 520px;
    height: 246px;
    padding: 24px;
    background: ${theme.card_bg};
    backdrop-filter: blur(3px);
`;

export const CardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    .person-data{
        display: flex;
        justify-content: space-between;
        gap: 16px;
        .image{
            width: 61px;
            height: 61px;
            border-radius: 50%;
            overflow: hidden;
            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }
        .data-text{
            h3{
                font-size: 23px;
                font-weight: 700;
                color: ${ theme.grey_dark };
            }
            p{
                font-weight: 400;
                font-size: 14px;
                color: ${ theme.natural };
            }
        }
        .rating{
            display: flex;
            svg{
                width: 17px;
                height: 16px;
            }
            p{
                color: ${theme.grey_dark};
                font-size: 20px;
            }
        }
    }
`;

export const CardBody = styled.div`
    margin-top: 24px;
    p{
        font-size: 14px;
        font-weight: 400;
    }
`;