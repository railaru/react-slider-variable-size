import React from "react";
import Slider from "react-slick";
import Slide from './Slide'

export default class VariableSlider extends React.Component {
    
    render() {

        const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
            <div
                {...props}
                className={
                    "slick-prev slick-arrow" +
                    (currentSlide === 0 ? " slick-disabled" : "")
                }
                aria-label="Previous"
                aria-disabled={currentSlide === 0 ? true : false}
                type="button"
            >
                <i className="material-icons"> keyboard_arrow_left</i>
            </div>
        );
        const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
            <div
                {...props}
                className={
                    "slick-next slick-arrow" +
                    (currentSlide === slideCount - 1 ? " slick-disabled" : "")
                }
                aria-label="Next"
                aria-disabled={currentSlide === slideCount - 1 ? true : false}
                type="button"
            >
                <i className="material-icons"> keyboard_arrow_right</i>
            </div>
        );

        const settings = {
            dots: false,            
            arrows: true,
            prevArrow: <SlickArrowLeft />,
            nextArrow: <SlickArrowRight />,
            speed: 700,
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 0,
            variableWidth: true,                   
            adaptiveheight: false,
            infinite: false, 
        };

        return (                         
            <div className='variable-slider-container'>

                <Slider className='variable-slider' {...settings}>
                    <Slide                         
                        img='https://source.unsplash.com/random/1120x750'
                        description='Photo © Chris Jackson'
                    />            
                    <Slide                         
                        img='https://source.unsplash.com/random/800x585'
                        description='Photo © Chris Jackson'
                    />                            
                    <Slide                         
                        img='https://source.unsplash.com/random/1120x750'
                        description='Photo © Chris Jackson'
                    />            
                    <Slide                        
                        img='https://source.unsplash.com/random/800x585'
                        description='Photo © Chris Jackson'
                    />            
                    <Slide                         
                        img='https://source.unsplash.com/random/1200x800'
                        description='Photo © Chris Jackson'
                    />                            
                    <Slide                         
                        img='https://source.unsplash.com/random/400x300'
                        description='Photo © Chris Jackson'
                    />                            
                </Slider>                           

            </div>
        );
    }
}

