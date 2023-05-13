import { ArrowIcon } from "../../assets/icons/ArrowIcon/arrow-rigth"
import { theme } from "../../theme"
import { ButtonContainer } from "./button.style"

interface Props{
    text?: string,
    arrow_position?: "left" | "right"
    is_disable: boolean
}

function Button({ text, arrow_position, is_disable }:Props) {
  return (
    <ButtonContainer is_disable={is_disable} >
      { arrow_position === 'left' &&  <ArrowIcon fillIcon={is_disable ? theme.white : theme.green} />}
      { text && text }
      { arrow_position === 'right' &&  <ArrowIcon fillIcon={is_disable ? theme.white : theme.green} />}
    </ButtonContainer>
  )
}

export default Button