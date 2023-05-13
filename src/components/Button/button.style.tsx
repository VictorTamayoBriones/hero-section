import styled from 'styled-components';
import { theme } from '../../theme';

interface Props{
    is_disable: boolean
}

export const ButtonContainer = styled.button<Props>`
    width: auto;
    background: ${(props)=>props.is_disable ? theme.white : theme.green};
    color: ${theme.white};
    padding: 16px 24px;
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 18px;
    border: none;
    gap: 10px;
    svg{
        width: 24px;
        height: 24px;
    }
`