import styled from 'styled-components';
import { theme } from '../../theme';

interface Props{
    is_disable: boolean
}

export const ButtonContainer = styled.button<Props>`
    width: auto;
    background: ${(props)=>props.is_disable ? theme.white : theme.green};
    color: ${theme.white};
`