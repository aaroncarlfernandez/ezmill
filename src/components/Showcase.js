import { Carousel, Container } from 'react-bootstrap';
import { CarouselItem } from 'react-bootstrap';

let Slideshow = () => {
    return (
        <>
            <h1>Sample Slideshow</h1>
            <Container>
                <Carousel>
                    <CarouselItem>
                        <img className="d-block w-100" src="/assets/img/Ez_logo.png" />
                    </CarouselItem>
                    <CarouselItem>
                        <img className="d-block w-100" src="/assets/img/Ez_logo.png" />
                    </CarouselItem>
                </Carousel>
            </Container>

        </>
    )
}

export default Slideshow;