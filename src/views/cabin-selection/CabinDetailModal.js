import React from 'react'
import Modal from '../../components/Modal/index';
import FooterButtonSection from '../../components/UI/FooterButtonSection';
import { Button } from 'antd';
import cx from 'classnames';
import classes from './CabinDetailModal.module.scss';
import {ReactComponent as ScaleIcon}  from '../../assets/icons/scale.svg';
import {ReactComponent as UserIcon}  from '../../assets/icons/user.svg';
import {ReactComponent as DishIcon}  from '../../assets/icons/dish.svg';
import {ReactComponent as EntertainIcon}  from '../../assets/icons/entertain.svg';
import {ReactComponent as FurnitureIcon}  from '../../assets/icons/furniture.svg';
import cabin1 from '../../assets/img/cabin1.jpg';
import cabin2 from '../../assets/img/cabin2.jpg';
import { ArrowRightOutlined, ArrowLeftOutlined, CloseOutlined, DownOutlined } from '@ant-design/icons';

const CabinDetailModal = (props) => {
    const {isShow, onClose, onSelect} = props;

    const onSelectClickHandler = ()=>{
        onSelect();
    };
    return (
        <Modal show={isShow} onClose={onClose} className={cx(classes.cabinDetailModal)}>
            <div className={cx(classes.header)}>
                <div>Cabin 1</div>
                <CloseOutlined  className={classes.crossIcon} onClick={onClose}/>
            </div>
            <div className={cx(classes.modalBody,"container")}>
                <div className={classes.nameSection}>
                    <Button type="primary" className={classes.arrowBtn}>
                        <ArrowLeftOutlined />
                    </Button>
                    <div className={cx(classes.cabinName)}>Interior</div>
                    <Button type="primary" className={classes.arrowBtn}>
                        <ArrowRightOutlined />
                    </Button>
                </div>
                <div className={classes.carousel}>
                    <div className={classes.slide}>
                        <img src={cabin1} />
                    </div>
                    <div className={classes.slide}>
                        <img src={cabin2} />
                    </div>
                </div>
                <div className={cx(classes.content)}>
                    <div className={classes.description}>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, odio sit amet rhoncus faucibus.</p> 
                    </div>
                    <div className="row no-gutters">
                        <div className="col-md-6">
                            <div className={classes.subHeading}>Room Feature</div>
                            <div className={classes.subContent}>
                                <div>
                                    <UserIcon className={classes.icon} width="20" height="20"/>
                                    <div>Accomodate upto 4 Guests</div>
                                </div>
                                <div>
                                    <ScaleIcon className={classes.icon}/>
                                    <div>Room Size - 139 SQ.FT</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className={classes.subHeading}>Inclusions</div>
                            <div className={classes.subContent}>
                                <div>
                                    <UserIcon className={classes.icon} width="20" height="20"/>
                                    <div>Accommodation</div>
                                </div>
                                <div>
                                    <DishIcon className={classes.icon} width="20" height="20"/>
                                    <div>All meals</div>
                                </div>
                                <div>
                                    <EntertainIcon className={classes.icon} width="20" height="20"/>
                                    <div>Entertainment</div>
                                </div>
                                <div>
                                    <FurnitureIcon className={classes.icon} width="20" height="20"/>
                                    <div>Access to all public areas and lounges</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.priceSection}>
                        <div className={classes.subHeading}>
                            PRICE DETAILS
                        </div>
                        <div className={cx(classes.subHeading, classes.price)}>
                            <span>&#8377; 18,024</span>
                            <DownOutlined />
                        </div>
                    </div>
                </div>
            </div>
            <FooterButtonSection text="Select" onClick={onSelectClickHandler} margin="2.2rem"/>
        </Modal>
    )
}

export default CabinDetailModal
