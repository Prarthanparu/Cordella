import React, { useState, useEffect } from "react";
import cx from 'classnames';
import styles from './Modal.module.css'

class Modal extends React.Component {

    onClose = e => {
        this.props.onClose && this.props.onClose(e);
    };

    render() {
        if(!this.props.show){
            document.body.style.overflow = 'unset';
            return null;
        }
        document.body.style.overflow = 'hidden';
        return (
            <div className={cx(styles.modal)}  onClick={(e) => {
                // close modal when outside of modal is clicked
                this.onClose(e);
              }}>
                <div className={cx(styles.modalcontent, "rounded-xl")} 
                    onClick={e => {
                    // do not close modal if anything inside modal content is clicked
                    e.stopPropagation();
                }}>
                    <div>{this.props.children}</div>
                </div>
            </div>
          );
    }
}

export default Modal;