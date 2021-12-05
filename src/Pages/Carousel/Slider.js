import React, { useState } from 'react';
import './slider.scss';
import SliderContent from './SliderContent';
import Slide from './Slide';

const Slider = (props) => {
    const getWidth = () => window.innerWidth;
    const [state, setState] = useState({
        translate: 450,
        transition: 0.45
    });

    const { translate, transition } = state;

    console.log(props.slides)




    return (
        <div className='slider'>
            <SliderContent
                translate={translate}
                transition={transition}
                width={getWidth()}
            >
                {props.slides.map((slide, i) => (
                    <Slide key={slide + i} content={slide} />
                ))}
            </SliderContent>
        </div>
    );
};

export default Slider;