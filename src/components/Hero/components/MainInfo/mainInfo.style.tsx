import styled from 'styled-components';
import { theme } from '../../../../theme';

export const MainInfoContainer = styled.div `
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 40px;
    p{
        font-size: 18px;
        color: ${theme.natural};
    }
    button{
        width: max-content;
    }
`;