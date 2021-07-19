import React from 'react'
import { Button } from "antd";

const FooterButtonSection = (props) => {
    const {text, onClick, margin="4rem", style={
        width: "150px",
        height: "40px"
    }} = props;
    const wrapperStyle = {
        display: 'flex',
        justifyContent: 'center',
        margin: margin
      };
    return (
        <div style={wrapperStyle} className={`${props.wrapperClass ? props.wrapperClass : "" }`}>
            <Button type="primary" onClick={onClick} size="large" className={`${props.className ? props.className : ""}`} style={style}>
                {text}
            </Button>
        </div>
    )
}

export default FooterButtonSection
