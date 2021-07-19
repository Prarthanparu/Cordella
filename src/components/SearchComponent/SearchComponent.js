import React, { useState, useEffect } from "react";
import { Form, Input, DatePicker, Button } from "antd";
import { EnvironmentFilled, CalendarFilled } from "@ant-design/icons";
import styles from "./SearchComponent.module.scss";
import cx from 'classnames';

const SearchComponent = (props) => {
  const [form] = Form.useForm();
  const [, forceUpdate] = useState({});

  // To disable submit button at the beginning.
  useEffect(() => {
    forceUpdate({});
  }, []);

  const onFinish = (values) => {
    console.log("Finish:", values);
  };

  return (
    <div className={cx(styles.searchComponentBar)}>
      <form  onSubmit={onFinish} className={cx("form-inline", styles.inlineSearchForm)}>
        <div className={styles.inputGroup}>
            <label htmlFor="sailingFrom">Sailing To</label>
            <input type="text" className="form-control" id="sailingFrom" placeholder="Kerala" value="Kerala" />
        </div>
        <div className={styles.inputGroup}>
            <label htmlFor="sailingTo">Sailing from</label>
            <input type="text" className="form-control" id="sailingTo" placeholder="Mumbai" value="Mumbai"/>
        </div>
        <div className={styles.inputGroup}>
            <label htmlFor="inlineFormInputName2">Month of Sail</label>
            <DatePicker suffix={null} mode="year" className={styles.datePicker} onChange={(e)=>{console.log(e)}}/>
        </div>
        <button type="submit" className="btn btn-primary">Seach Cruise</button>
      </form>
    </div>
  );
};

export default SearchComponent;
