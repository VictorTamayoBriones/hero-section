import styled from 'styled-components';
import { theme } from '../../../../theme';

export const MainInfoContainer = styled.div `
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 40px;
    h1{
        font-size: 80px;
        line-height: 90px;
        font-weight: 400;
        color: ${theme.grey_dark};
    }
    p{
        font-size: 18px;
        color: ${theme.natural};
    }
    button{
        width: max-content;
    }
`;