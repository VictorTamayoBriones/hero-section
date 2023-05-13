import styled from 'styled-components';
import { theme } from '../../../../theme';

export const FooterContainer = styled.footer`
    display: flex;
    flex-direction: column;
    gap: 24px;
    p{
        font-size: 18px;
        color: ${theme.grey_dark};
    }
    h2{
        font-size: 40px;
        color: ${theme.grey_light};
    }
`;