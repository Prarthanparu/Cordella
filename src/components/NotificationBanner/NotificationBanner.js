import styles from "./NotificationBanner.module.scss";
import {
  CloseCircleOutlined
} from "@ant-design/icons";

function NotificationBanner(props) {
  const {isShow, onClose} = props;
  if(!isShow){
    return <></>;
  }
  return (
    <div className={styles.notificationBannerMain}>
      <a href="#">Covid-19 safety Updates on Cordelia</a>
      <CloseCircleOutlined style={{ color: "#500E4B"}} onClick={onClose}/>
    </div>
  );
}

export default NotificationBanner;
