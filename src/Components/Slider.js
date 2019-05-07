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

                <div className='rich-text'>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>

                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        );
    }
}

