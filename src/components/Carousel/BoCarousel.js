import React from 'react'
import { Container,Row ,Col} from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import "./carousel.css"
export function BoCarousel() {
  return (
      <div className='carousel-container'>
        <Carousel indicators={false}>
          <Carousel.Item>
            <Container>
              <Row>
                <Col lg={5}>
                  <div className="slider-content">
                    <h3>Slider title</h3>
                    <p>Lorem ipsum dolor sit amet. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, officia!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut, praesentium?</p>
                  </div>
                </Col>
                <Col lg={7}>
                  <div className="slider-image">
                    <img src="./images/img1.jpg" alt="" />
                  </div>
                </Col>
              </Row>
            </Container>
          </Carousel.Item>
      </Carousel>
      </div>

  )
}

export default BoCarousel;