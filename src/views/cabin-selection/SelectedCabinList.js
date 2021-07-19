import React from 'react';
import cx from 'classnames';
import SelectedCabin from './SelectedCabin';
import classes from './SelectedCabinList.module.css';

const SelectedCabinList = (props) => {
    const {deckNumbers} = props;
    return (
        <div className={props.className}>
            <div className={classes.heading}>Cabins</div>
            <div className="row">
                <div className={cx("col-lg-3 col-md-4 col-sm-5 col-sx-12", classes.cabinCard)}>
                    <SelectedCabin cabinName="Chairman's Suit" guestCount="02" deckNo={ deckNumbers && deckNumbers[0]}/>
                </div>
                <div className={cx("col-lg-3 col-md-4 col-sm-5 col-sx-12", classes.cabinCard)}>
                    <SelectedCabin cabinName="Cabin 2" guestCount="01" deckNo={deckNumbers && deckNumbers[1]}/>
                </div>
            </div>
        </div>
    )
}

export default SelectedCabinList
