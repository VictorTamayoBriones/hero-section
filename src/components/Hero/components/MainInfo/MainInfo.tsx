import { Button } from "../../.."
import { MainInfoContainer } from "./mainInfo.style"

function MainInfo() {
  return (
    <MainInfoContainer>
      <h1>El sitio que desea, <br/> sin el tiempo de <br/> desarrollo</h1>
      <p>Su sitio web debe ser un activo de marketing, no un <br/> desafío de ingeniería.</p>
      <Button text="Iniciar ahora" arrow_position="right" is_disable={false} />
    </MainInfoContainer>
  )
}

export default MainInfo