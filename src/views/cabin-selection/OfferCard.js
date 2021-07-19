import React from 'react';
import Card from '../../components/UI/Card';

const OfferCard = (props) => {
    const overTextStyle = {
    "fontWeight": "bold",
    "fontWize": "22px",
    "lineHeight": "26px",
    "textAlign": "center",
    "textTransform": "capitalize",
    "position": "absolute",
    "bottom": "1.2rem",
    "maxWidth": "80%"
    }

    return (
        <Card className={`${props.className}`}>
            <div className="text-white">
                <img src={props.img} className="card-img" alt="..."/>
                <div className="card-img-overlay">
                    <div style={overTextStyle}>
                        <p>{props.caption}</p>
                    </div>
                </div>
            </div>
        </Card>
    )
}

export default OfferCard
