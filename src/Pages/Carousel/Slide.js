import React from 'react';

const Slide = (props) => {
    console.log(props.content)
    return (
        <div className = 'slide' style = {{backgroundImage: url(`${props.content}`)}}>
            <span>rame</span>
        </div>
    );
};

export default Slide;