import { ArrowIcon } from "../../assets/icons/ArrowIcon/arrowRigth"
import { theme } from "../../theme"
import { ButtonContainer } from "./button.style"

interface Props{
  text?: string,
  arrow_position: "left" | "right"
  is_disable: boolean,
  onClick?: ()=>void
}

function Button({ text, arrow_position, is_disable, onClick }:Props) {
  return (
    <ButtonContainer onClick={onClick} is_disable={is_disable} svgposition={arrow_position} have_text={text ? true : false}>
      { arrow_position === 'left' &&  <ArrowIcon fillIcon={is_disable ? theme.white : theme.yellow} />}
      { text && text }
      { arrow_position === 'right' &&  <ArrowIcon fillIcon={is_disable ? theme.white : theme.yellow} />}
    </ButtonContainer>
  )
}

export default Button