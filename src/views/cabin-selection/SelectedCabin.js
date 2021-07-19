import React from 'react';
import Card from '../../components/UI/Card';
import {ReactComponent as DeleteIcon} from '../../assets/img/delete-icon.svg';
import cx from 'classnames';
import classes from './SelectedCabin.module.css';

const selectedCabin = (props) => {
    const {cabinName, guestCount, deckNo} = props;
    return (
        <Card className={cx(classes.selectedCabin)}>
        <div className={cx(classes.heading)}>
            <div className={cx(classes.headingText)}>{cabinName}</div>
            <DeleteIcon  className={cx(classes.deleteIcon)}/>
        </div>
        <div className={cx(classes.subHeading)}>Guest : {guestCount}</div>
        {deckNo && <div className={cx(classes.subHeading)}>Deck No. : {deckNo}</div>}
        </Card>
    )
}

export default selectedCabin
