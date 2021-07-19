import React from 'react'
import cx from 'classnames';

const Carousel = (props) => {
    const {imgs} = props;
    return (
        <>
            <div className="productSlider--Imageroute">
                <div id={`carousel-${props.id}`} className={cx("carousel slide h-100", props.className)} data-ride="carousel">
                    <div className="carousel-inner h-100">
                        {imgs.map((img,index)=>
                            <div key={index} className={`carousel-item cauroselImg--itemRt ${index==0&&'active'} h-100`} data-interval="10000">
                                <img src={img} className={cx("h-100 d-block w-100")} alt="..." />
                            </div>
                        )}
                    </div>
                    <a className="carousel-control-prev" href={`#carousel-${props.id}`} role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href={`#carousel-${props.id}`} role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div> 
            </div>
        </>
    )
}

export default Carousel
