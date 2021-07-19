import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import cx from "classnames";
import styles from "./overlay.module.scss";


export const Overlay = ({ children, className, actionButton=null }) => {
  useEffect(() => {
    if (typeof document !== "undefined")
      document.body.style.overflow = "hidden";
    return () => {
      if (typeof document !== "undefined")
        document.body.style.overflow = "auto";
    };
  });
  return (
    <>
      {ReactDOM.createPortal(<div
      className={cx(
        // "fixed top-0 left-0 bottom-0 right-0 overflow-y-scroll disable-scrollbars filter-modal",
        "fixed top-0 left-0 bottom-0 right-0 filter-modal",
        className
      )}
    >    
      {actionButton && <div className={styles.actionBtn}> {actionButton} </div>}
      <div
        className={cx("relative", styles.customScroll)}
        style={{ height: "100vh" }}
      >
        <div
          className="absolute mx-auto w-full top-0"
          style={{ overflowY: "scroll", height: "85%", zIndex: 999999 }}
        >
          {children}
        </div>
      </div>
    </div>, document.getElementById("overlay-container"))}
    </>
  );
};

export default Overlay;
