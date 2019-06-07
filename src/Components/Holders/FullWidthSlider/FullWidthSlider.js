import React from "react";
import Slider from "react-slick";

import isInViewport from '../../../helpers/isInViewport'

import Card from '../../Doers/Cards/Card3'
import ArrowRight from '../../Doers/svg/ArrowRight'

const slideClassName = '.card-3'


export default class FullWidthSlider extends React.Component {

    state = {
        showPrevArrow: false,
        showNextArrow: true,
        allSlidesAreVisible: false
    }

    componentDidMount() {
        this.checkVisibleSlideAmount()
        window.addEventListener('resize', () => {
            this.checkVisibleSlideAmount()
        });
    }

    componentDidUpdate() {

        const sliderArrows = document.querySelectorAll('.slick-arrow')

        if (this.state.allSlidesAreVisible) {
            sliderArrows.forEach(arrow => {
                arrow.style.display = 'none'
            })
        } else {
            sliderArrows.forEach(arrow => {
                arrow.style.display = 'block'
            })
        }
    }

    checkVisibleSlideAmount() {

        const sliderItems = document.querySelectorAll(slideClassName)
        let slidesInView = 0

        sliderItems.forEach(sliderItem => {
            if (isInViewport(sliderItem)) {
                slidesInView++
            }
        })

        sliderItems.length === slidesInView
            ?
            this.setState({ allSlidesAreVisible: true })
            :
            this.setState({ allSlidesAreVisible: false })
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
                    this.state.showNextArrow &&
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
            speed: 300,
            initialSlide: 0,
            variableWidth: true,
            adaptiveheight: false,
            infinite: false,
            cssEase: 'cubic-bezier(.67,.31,.4,.8)',

            afterChange: (currentSlide) => {

                const slideAmount = document.querySelectorAll(slideClassName).length

                if (currentSlide === 0) {
                    this.setState({ showPrevArrow: false })
                    this.setState({ showNextArrow: true })

                    return false
                }
                if (currentSlide === slideAmount - 3) {
                    this.setState({ showPrevArrow: true })
                    this.setState({ showNextArrow: false })

                    return false
                }

                this.setState({ showPrevArrow: true })
                this.setState({ showNextArrow: true })

                this.checkVisibleSlideAmount()
            }
        };

        return (
            <div className='full-width-slider'>
                <div className='container'>
                    <Slider className='variable-slider--width' {...settings}>

                        <Card
                            img='https://images.unsplash.com/photo-1559546763-f6f6e1f44e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80'
                            link='https://www.google.com'
                            link_additional='https://www.yahoo.com'
                            text1='Kuniko Maeda sculptures crafted from recycled paper'
                            text2='Inspiration'
                        />
                        <Card
                            img='https://images.unsplash.com/photo-1559546763-f6f6e1f44e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80'
                            link='https://www.google.com'
                            link_additional='https://www.yahoo.com'
                            text1='Kuniko Maeda sculptures crafted from recycled paper'
                            text2='Inspiration'
                        />
                        <Card
                            img='https://images.unsplash.com/photo-1559546763-f6f6e1f44e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80'
                            link='https://www.google.com'
                            link_additional='https://www.yahoo.com'
                            text1='Kuniko Maeda sculptures crafted from recycled paper'
                            text2='Inspiration'
                        />
                        <Card
                            img='https://images.unsplash.com/photo-1559546763-f6f6e1f44e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80'
                            link='https://www.google.com'
                            link_additional='https://www.yahoo.com'
                            text1='Kuniko Maeda sculptures crafted from recycled paper'
                            text2='Inspiration'
                        />
                        <Card
                            img='https://images.unsplash.com/photo-1559546763-f6f6e1f44e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80'
                            link='https://www.google.com'
                            link_additional='https://www.yahoo.com'
                            text1='Kuniko Maeda sculptures crafted from recycled paper'
                            text2='Inspiration'
                        />
                        <Card
                            img='https://images.unsplash.com/photo-1559546763-f6f6e1f44e23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3150&q=80'
                            link='https://www.google.com'
                            link_additional='https://www.yahoo.com'
                            text1='Kuniko Maeda sculptures crafted from recycled paper'
                            text2='Inspiration'
                        />
                    </Slider>
                </div>
            </div>
        );
    }
}

