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
                    img='https://images.unsplash.com/photo-1557816596-d3a1475c6a93?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1120&h=750&fit=crop&ixid=eyJhcHBfaWQiOjF9'
                    description='Photo © Chris Jackson'
                />
                <Slide
                    img='https://images.unsplash.com/photo-1560091410-029801c9b3a4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=585&fit=crop&ixid=eyJhcHBfaWQiOjF9'
                    description='Photo © Chris Jackson'
                />
                <Slide
                    img='https://images.unsplash.com/photo-1557816596-d3a1475c6a93?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1120&h=750&fit=crop&ixid=eyJhcHBfaWQiOjF9'
                    description='Photo © Chris Jackson'
                />
                <Slide
                    img='https://images.unsplash.com/photo-1560091410-029801c9b3a4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&h=585&fit=crop&ixid=eyJhcHBfaWQiOjF9'
                    description='Photo © Chris Jackson'
                />
                <Slide
                    img='https://images.unsplash.com/photo-1560229855-d604bee29724?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1200&h=800&fit=crop&ixid=eyJhcHBfaWQiOjF9'
                    description='Photo © Chris Jackson'
                />
                <Slide
                    img='https://images.unsplash.com/photo-1557786907-6db6b1dc52bc?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&h=300&fit=crop&ixid=eyJhcHBfaWQiOjF9'
                    description='Photo © Chris Jackson'
                />
            </Slider>
        );
    }
}

