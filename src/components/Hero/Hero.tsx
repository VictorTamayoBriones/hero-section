import { HeroContainer } from "./hero.style"

interface Props{
  children: JSX.Element | JSX.Element[]
}

function Hero({children}:Props) {
  return (
    <HeroContainer>
      {children}
    </HeroContainer>
  )
}

export default Hero