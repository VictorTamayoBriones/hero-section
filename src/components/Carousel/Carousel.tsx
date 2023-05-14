import { ButtonActions, Cards, CardsContainer, CarouselContainer } from "./carousel.style"
import { dataCards } from './data/dataCards';
import { Button, Card } from "..";

function Carousel() {


    return (
        <CarouselContainer>
            <CardsContainer>
                <Cards>
                    {
                        dataCards.map((card, i) => (
                                <Card key={`card-${i}`} {...card}/>   
                            )
                        )
                    }
                </Cards>
            </CardsContainer>
            <ButtonActions>
                <Button is_disable={false} arrow_position="left" />
                <Button is_disable={false} arrow_position="right" />
            </ButtonActions>
        </CarouselContainer>
    )
}

export default Carousel