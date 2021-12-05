import React from 'react';

const SliderContent = (props) => {
    return (
        <div className = 'slider-content' style={{width: props.width, transform: [{translateX: `${props.translate}px`}], transition: `${props.transition}s`}}>
            
        </div>
    );
};

export default SliderContent;