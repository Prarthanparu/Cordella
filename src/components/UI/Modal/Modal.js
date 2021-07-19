import React, { useState, useEffect, createRef} from 'react';
import ReactDOM from "react-dom";
import cx from 'classnames';
import styles from './Modal.module.css'


const Modal = (props) => {
    const {isShow, backdrop,onClose, size="",title} = props;
    const modalRef = createRef();
    useEffect(()=>{
       
    },[isShow])
    const onCloseModal = e => {
        props.onClose && props.onClose(e);
    };

    return (
        <div>
            {ReactDOM.createPortal(
            <div className="modal fade" tabIndex="-1" onClick={onClose} ref={modalRef}>
                <div className={cx("modal-dialog",size)}>
                <div class="modal-content">
                    <div class="modal-header">
                        {title && <h5 class="modal-title">{title}</h5>}
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                         <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                     {props.children}
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>
        , document.getElementById('modal-container'))}
        </div>
    );
}

export default Modal;