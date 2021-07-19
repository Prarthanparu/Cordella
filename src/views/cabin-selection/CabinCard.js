import React from 'react'
import Card from '../../components/UI/Card';
import Carousel from '../../components/UI/Carousel';
import {ReactComponent as ScaleIcon} from '../../assets/icons/scale.svg';
import { Button } from "antd";
import cabin1 from '../../assets/img/cabin1.jpg';
import cabin2 from '../../assets/img/cabin2.jpg';
import cabin3 from '../../assets/img/cabin3.jpg';

const CabinCard = (props) => {
    const {id, name,description,size, price, btnText="Select", onDetail, onCabinSelect} = props;
    const onDetailClickHandler = (e) => {
        const selectedCabin = {id, name, description, size, price};
        onDetail(selectedCabin);
    };

    const onCabinSelectHandler = (e) => {
        const selectedCabin = {id, name, description, size, price};
        onCabinSelect(selectedCabin);
    };

    return (
        <Card className={props.className}>
            <div className="row no-gutters">
            <div className="col-md-5">
                <Carousel id={id} imgs={[cabin1, cabin2, cabin3]}/>
            </div>
            <div className="col-md-7">
                <div className="card-body">
                    <h5 className="card-title text-uppercase font-weight-bold">{name}</h5>
                    <p className="card-text text-muted">{description}</p>
                    <div className="row">
                        <div className="col-1">
                            <ScaleIcon style={{marginRight:"0.5rem"}}/>
                        </div>
                        <div className="col-10">
                            <p className="text-muted text-capitalize mb-0">Room Size - {size} <span className={"text-uppercase"}>SQ.FT</span></p>
                        </div>
                    </div>
                    <a href='#'  onClick={onDetailClickHandler}>Details</a>
                    <footer className="mt-3 row">
                        <div className="col-6">
                            <h5 className="font-weight-bold mb-0" style={{lineHeight:"30px"}}>&#8377;{price}</h5>
                        </div>
                        <div className="col-6">
                            <Button type="primary" style={{width:"100%"}} onClick={onCabinSelectHandler}>{btnText}</Button>
                        </div>
                    </footer>
                </div>
            </div>
            </div>
        </Card>
    )
}

export default CabinCard;
