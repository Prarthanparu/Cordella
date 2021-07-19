import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRoutes, filterRoutes } from '../../redux/actions/routeAction';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import cx from 'classnames';
import {
  Col,
  Dropdown,
  Menu,
  Row,
  Tag,
} from "antd";
import {
  FunnelPlotFilled,
  CloseOutlined,
  SortAscendingOutlined,
  SortDescendingOutlined,
} from "@ant-design/icons";
import styles from "./CommonCards.module.scss";
import TravelItinerary from "./TravelItineraryCard";

const { CheckableTag } = Tag;

export const CruiseRoutesCards = (props) => {
  const {filterBy, sortBy} = props;
  const [selectedTags, setselectedTags] = useState([]);
  const [sort, setSort] = useState({value:"price", type:"asc"});
  const tagsData = [
    "1 - Night",
    "2 - Nights",
    "3 - Nights",
    "4 - Nights",
    "5 - Nights",
    "6 - Nights",
    "7 - Nights",
  ];

  const sortFilter = {
    1 : {value:"price", type: "asc"},
    2 : {value:"price", type: "desc"},
    3 : {value:"nightCount", type: "asc"},
    4 : {value:"nightCount", type: "desc"},
  };

  useEffect(()=>{
    filterBy(selectedTags.map(tag=>tag.split("-")[0].trim()));
  },[selectedTags]);

  const handleChange = (tag, checked) => {
    setselectedTags(prevState => checked ? [...prevState, tag] : prevState.filter((t) => t !== tag));
  };

  const onSortFilterClickHandler = (e) => {
    setSort(sortFilter[e.key]);
    sortBy(sortFilter[e.key]);
  };

  const menu = (
    <Menu onClick= {onSortFilterClickHandler}>
      <Menu.Item key={1}>Price: Low to High <SortAscendingOutlined /></Menu.Item>
      <Menu.Item key={2}>Price: High to Low <SortDescendingOutlined /></Menu.Item>
      <Menu.Item key={3}>Number of Nights: Low to High <SortAscendingOutlined /></Menu.Item>
      <Menu.Item key={4}>Number of Nights: High to Low <SortDescendingOutlined /></Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="filter-itemSelect--box">
      <div className="container">
          <Row className="my-4">
            <Col span={24}>
              <div className={styles.FilterNightTags}>
                <div className="filter---flex-view">
                  <span className="filterBy"> <FunnelPlotFilled /> Filter By: </span>
                  <div className="filterSelect--listCheck">
                    {tagsData.map((tag, i) => (
                      <CheckableTag
                        key={i+1}
                        checked={selectedTags.indexOf(tag) > -1}
                        onChange={(checked) => handleChange(tag, checked)}
                        className={cx(styles.checkableTag, `${selectedTags.indexOf(tag) > -1 ? styles.selectedTag : ""}`)}
                      >
                        {selectedTags.indexOf(tag) > -1 ? (
                          <>
                            <CloseOutlined className={styles.closeIcon} />
                            <span>{tag}</span>
                          </>
                        ) : (
                          <>{tag}</>
                        )}
                      </CheckableTag>
                    ))}
                  </div>
                </div>
              </div>
            </Col>
            <Col className="shortFilter--main" span={24}>
              <div className={styles.FilterSortSection}>
                <Dropdown overlay={menu}>
                  <a
                    className="ant-dropdown-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    Sort Filter { sort.type === "asc" ? <SortAscendingOutlined /> : <SortDescendingOutlined/>}
                  </a>
                </Dropdown>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
};
export const TravelItineraryCards = (props, CruiseRoutesCards) => {
  const {routeData} = props;
  return (
    <div className={styles.TravelItineraryCardsBackground}>
      { routeData && routeData.map((item, i) =>{
        return(
          <TravelItinerary key={i} data = {item}/>
        )
      })}
    </div>
  );
};

CruiseRoutesCards.TravelItineraryCards = TravelItineraryCards;

export default CruiseRoutesCards;
