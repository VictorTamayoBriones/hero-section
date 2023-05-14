/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonActions, Cards, CarouselContainer } from "./carousel.style"
import { dataCards } from './data/dataCards';
import { Button, Card } from "..";
import { register } from 'swiper/element';
import { useEffect, useRef } from "react";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/bundle';
function Carousel() {

    const swiperContainer:any = useRef('')

    register()

    useEffect(() => {
        // listen for Swiper events using addEventListener
        swiperContainer.current.addEventListener('progress', (e:any) => {
          const [swiper, progress] = e.detail;
          console.log(progress);
        });
    
        swiperContainer.current.addEventListener('slidechange', (e:any) => {
          console.log('slide changed');
        });
    }, []);

    return (
        <CarouselContainer>
            <swiper-container ref={swiperContainer} slides-per-view="1" grid-rows="1" mousewheel-force-to-axis="true" loop="true" >
                
                {
                    dataCards.map((card, i) => (
                            <swiper-slide key={`card-${i}`} >
                                <Card  {...card}/>   
                            </swiper-slide>
                        )
                    )
                }
                
            </swiper-container>
            
            <ButtonActions>
                <Button is_disable={false} arrow_position="left" onClick={()=>swiperContainer.current.swiper.slidePrev()} />
                <Button is_disable={false} arrow_position="right" onClick={()=>swiperContainer.current.swiper.slideNext()} />
            </ButtonActions>
        </CarouselContainer>
    )
}

export default Carousel