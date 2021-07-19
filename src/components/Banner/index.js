import React from 'react';
import Container from '../Container';
import BannerImage from '../../assets/img/banner.png'

const Banner=(props)=> {
    return (
        <div className="bg-no-repeat bg-cover" style={{backgroundImage:props.image?`url(${props.image})`:`url(${BannerImage})`}}>
            <div className="h-80"></div>
            <Container>
            <div className="text-4xl text-white font-bold mb-12">Find Your cruise</div>
            </Container>
        </div>
    );
}

export default Banner;