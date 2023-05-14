import styled from 'styled-components';
import { theme } from '../../theme';

interface Props{
    is_disable: boolean,
    svgposition: "left" | "right"
    have_text: boolean
}

export const ButtonContainer = styled.button<Props>`
    width: auto;
    background: ${(props)=>props.is_disable ? theme.white : theme.green};
    color: ${theme.white};
    padding: ${(props)=>props.have_text ? '16px 24px' : '22px'};
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 18px;
    border: none;
    gap: 10px;
    cursor: pointer;
    svg{
        position: static !important;
        width: 24px;
        height: 24px;
        transform: rotate(${(props)=>props.svgposition === "left" ? '180deg' : ''});
    }

    &:hover{
        background: ${theme.green_dark};
    }
`