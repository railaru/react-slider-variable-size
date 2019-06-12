import React from "react";
import Slider from "react-slick";
import Slide from '../../Doers/Slides/Slide'
import ArrowRight from '../../Doers/svg/ArrowRight'


export default class VariableSlider extends React.Component {

    state = {
        showPrevArrow: true,
        showNextArrow: true,
    }

    render() {

        const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (

            <div
                {...props}
                className={
                    "slick-prev slick-arrow" +
                    (currentSlide === 0 ? " slick-disabled" : "")
                }
                aria-label="Previous"
            >
                {
                    this.state.showPrevArrow &&
                    <ArrowRight />
                }
            </div >

        );
        const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (

            <div
                {...props}
                className={
                    "slick-next slick-arrow" +
                    (currentSlide === slideCount - 1 ? " slick-disabled" : "")
                }
                aria-label="Next"
            >
                {
                    <div className='carousel-arrow-1'>
                        <ArrowRight />
                    </div>
                }
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
            <Slider className='variable-slider' {...settings} style={{ paddingTop: '50px' }}>
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
        );
    }
}

