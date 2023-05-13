interface Props{
  children: JSX.Element | JSX.Element[]
}

function Hero({children}:Props) {
  return (
    <div>{children}</div>
  )
}

export default Hero