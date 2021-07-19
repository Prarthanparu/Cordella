import React from 'react'
import CabinCard from './CabinCard';
import cx from 'classnames';
import './index.css';

const CabinSection = (props) => {
    const {onDetail, onCabinSelect} = props;
    return (
        <div className={cx(props.className)}>
            <div className="heading">Select Your Cabin</div>
            <CabinCard 
            id="1"
            name="interior" 
            description={`Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Sed tempor, 
            odio sit amet rhoncus faucibus.`}
            size="139"
            price="18024"
            className="mt-4"
            onDetail={onDetail}
            onCabinSelect={onCabinSelect}
            />
             <CabinCard 
            id="2"
            name="Ocean View" 
            description={`Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Sed tempor, 
            odio sit amet rhoncus faucibus.`}
            size="139"
            price="18024"
            className="mt-4"
            onDetail={onDetail}
            onCabinSelect={onCabinSelect}
            />
             <CabinCard 
            id="3"
            name="Balcony" 
            description={`Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Sed tempor, 
            odio sit amet rhoncus faucibus.`}
            size="139"
            price="18024"
            className="mt-4"
            onDetail={onDetail}
            onCabinSelect={onCabinSelect}
            />
             <CabinCard 
             id="4"
            name="Suit" 
            description={`Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Sed tempor, 
            odio sit amet rhoncus faucibus.`}
            size="139"
            price="18024"
            className="mt-4"
            onDetail={onDetail}
            onCabinSelect={onCabinSelect}
            />
             <CabinCard 
             id="5"
            name="Chairman's Suit" 
            description={`Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. Sed tempor, 
            odio sit amet rhoncus faucibus.`}
            size="139"
            price="18024"
            className="mt-4"
            onDetail={onDetail}
            onCabinSelect={onCabinSelect}
            />
        </div>
    )
}

export default CabinSection
