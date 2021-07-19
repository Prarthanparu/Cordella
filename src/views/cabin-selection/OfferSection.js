import React from 'react';
import cx from 'classnames';
import './index.css';
import OfferCard from './OfferCard';
import cabin1 from '../../assets/img/cabin1.jpg';
import cabin2 from '../../assets/img/cabin2.jpg';
import cabin3 from '../../assets/img/cabin3.jpg';

const OfferSection = (props) => {
    return (
        <div className={cx(props.className)}>
            <div className="heading">Offers</div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <OfferCard className="mt-4" caption={"OCEAN VIEW AT PRICE OF INTERIOR"} img={cabin1}/>
                </div>
                <div className="col-md-6 col-sm-12">
                    <OfferCard className="mt-4" caption={"OCEAN VIEW AT PRICE OF INTERIOR"} img={cabin2}/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <OfferCard className="mt-4" caption={"ONBOARD CREDIT UP TO $250"} img={cabin3}/>
                </div>
                <div className="col-md-6 col-sm-12">
                    <OfferCard className="mt-4" caption={"OCEAN VIEW AT PRICE OF INTERIOR"} img={cabin1}/>
                </div>
            </div>

        </div>
    )
}

export default OfferSection
