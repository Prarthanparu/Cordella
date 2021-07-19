import React from 'react';

const Container=(props)=> {
    return (
        <div className={`${props.wrapperClass?props.wrapperClass:""}`}>
        <div className={`container mx-auto ${props.innerClass?props.innerClass:""}`}>
            {props.children}
        </div>
        </div>
    );
}

export default Container;