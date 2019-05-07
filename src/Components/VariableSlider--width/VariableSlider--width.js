import React from "react";
import Slider from "react-slick";
import Card from './Card'

export default class VariableSliderWidth extends React.Component {
    
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
            initialSlide: 0,
            variableWidth: true,                   
            adaptiveheight: false,
            infinite: false, 
        };

        return (                         
            <div className='container variable-slider--width-container'>

                <Slider className='variable-slider--width' {...settings}>
                    <Card                 
                        img   = 'https://source.unsplash.com/random/484x276'
                        title = 'Kuniko Maeda sculptures crafted from recycled paper'
                        category = 'Inspiration'
                    />                                                          
                    <Card                 
                        img   = 'https://source.unsplash.com/random/484x277'
                        title = '5 biomaterials which have grown themselves'
                        category = 'Materials'
                    />                                                          
                    <Card                 
                        img   = 'https://source.unsplash.com/random/484x278'
                        title = '80-year-old wooden escalators are transformed into a sculpture'
                        category = 'Projects'
                    />                                                          
                    <Card                 
                        img   = 'https://source.unsplash.com/random/484x279'
                        title = 'Curved buildings elicit positive emotions at Camp Adventure Park'
                        category = 'Projects'
                    />                                                          
                    <Card                 
                        img   = 'https://source.unsplash.com/random/484x276'
                        title = 'Kuniko Maeda sculptures crafted from recycled paper'
                        category = 'Inspiration'
                    />                                                          
                    <Card                 
                        img   = 'https://source.unsplash.com/random/484x277'
                        title = '5 biomaterials which have grown themselves'
                        category = 'Materials'
                    />                                                          
                    <Card                 
                        img   = 'https://source.unsplash.com/random/484x278'
                        title = '80-year-old wooden escalators are transformed into a sculpture'
                        category = 'Projects'
                    />                                                          
                    <Card                 
                        img   = 'https://source.unsplash.com/random/484x279'
                        title = 'Curved buildings elicit positive emotions at Camp Adventure Park'
                        category = 'Projects'
                    />                                                          
                </Slider>                           

            </div>
        );
    }
}

