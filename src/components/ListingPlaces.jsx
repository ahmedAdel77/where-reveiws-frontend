import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";

import { render } from "react-dom";

import Rating from "react-rating";

import Pagination from "./Pagination";

const ListingPlaces = (props) => {
  const startIndex = (props?.activePage - 1) * props?.pageSize;
  let counter2 = 0;
  let counter = startIndex;
  // const showedItems = this.props.users?.slice(startIndex,startIndex + this.props.pageSize);
  // var showedItems = startIndex + props?.pageSize;

  // var  filteredItems= props?.places;

  const [index, setIndex] = useState(0);
  const [staffRate, setstaffRate] = useState(5);

  var [filteredItems, setfilteredItems] = useState(props.places);
  var [dataCopy, setDataCopy] = useState(props.places);

  var [showedItems, setshowedItems] = useState(startIndex + props?.pageSize);

  var [PageNo, setnewPageNo] = useState(props.PageNo);

  var [l2, settextBx] = useState({ location: "" });
  var [isChecked, setisChecked] = useState(false);

 var handleChange = ({ target }) => {
    l2[target.name] = target.value;
    //Set Satate
    settextBx({ ...l2 });
    console.log(l2)
    filteredItems = dataCopy.filter((p) => p.city.includes(l2.location.toString()));
    setfilteredItems(filteredItems);
    console.log(filteredItems);
  };


  const handleFilterPrice = (e) => {
    if (e.target.value == "Price1") {
      console.log(filteredItems);
      filteredItems = dataCopy.filter((p) => p.maxPrice < 200);
      setfilteredItems(filteredItems);
      console.log(filteredItems);
    } else if (e.target.value == "Price2") {
      filteredItems = dataCopy.filter((p) => p.maxPrice >= 200);
      setfilteredItems(filteredItems);
      console.log(filteredItems);
    }
  };


  const handleFilterlocation = (e) => {
    if (e.target.value == "location1") {

      filteredItems = dataCopy.filter((p) => p.city == "Cairo");
      setfilteredItems(filteredItems);
    } else if (e.target.value == "location2") {
      setisChecked(true);
      
    }
  };



  
  const handleFilterRating = (e) => {
    if (e.target.value == "Rating1") {

      filteredItems = dataCopy.filter((p) => p.ratingCount == 5);
      setfilteredItems(filteredItems);
    } else if (e.target.value == "Rating2") {
      filteredItems = dataCopy.filter((p) => p.ratingCount == 4);
      setfilteredItems(filteredItems);      
    }
    else if (e.target.value == "Rating3") {
      filteredItems = dataCopy.filter((p) => p.ratingCount == 3);
      setfilteredItems(filteredItems);      
    }
  };
  var getBoxAppear=()=>{

    const classes = isChecked == false ? "disappear":"appear";
      return classes;
  }
  useEffect(() => {
    setnewPageNo(Math.ceil(filteredItems?.length / props.pageSize));
  }, [filteredItems]);


  useEffect(() => {}, [l2]);

  useEffect(() => {}, [isChecked]);


  useEffect(() => {
    setfilteredItems(props.places);
    setDataCopy(props.places);
    setshowedItems(startIndex + props?.pageSize);
  }, [props]);


  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="Aside-Menu">
              <div className="Menu_Heading">
                <h3 className="text-center FilterTitle">Price Ranges</h3>
              </div>
              <div className="chk_container">
                <label className="chklabel">
                  <input
                    type="radio"
                    className="filtercheck"
                    value="Price1"
                    name="filter"
                    onClick={handleFilterPrice}
                  />
                  less 200$
                </label>

                {/* <label className="chklabel">less 200$</label> */}
              </div>
              <div className="chk_container">
                <label className="chklabel">
                  <input
                    type="radio"
                    className="filtercheck"
                    value="Price2"
                    name="filter"
                    onClick={handleFilterPrice}
                  />
                  More 200$
                </label>

                {/* <label className="chklabel">More 200$</label> */}
              </div>

              <hr></hr>
              {/* second  */}
              <div className="Menu_Heading">
                <h3 className="text-center FilterTitle">Location</h3>
              </div>
              {/* <div className="chk_container"> */}

              {/* <label className="chklabel">
                  <input type="radio" className="filtercheck" value="location1"  name="filter"  onClick={handleFilterPrice} />
                  cairo
                   </label>
              
                {/* <label className="chklabel">Your Location</label> */}
              {/* </div> */}
              <div className="chk_container">
                <label className="chklabel">
                  <input
                    type="radio"
                    className="filtercheck"
                    value="location1"
                    name="filter"
                    onClick={handleFilterlocation}
                  />
                  Cairo
                </label>
                {/* <label className="chklabel">Egypt</label> */}
              </div>
              <div className="chk_container">
                <label className="chklabel ">
                  <input
                    type="radio"
                    className="filtercheck"
                    value="location2"
                    name="filter"
                    onClick={handleFilterlocation}
                  />
                  Any City
                </label>
                {/* </label> */}
              </div>
                  <input
                    type="text"
                    className={getBoxAppear()}
                    onChange={handleChange}
                    name="location"
                  />
              {/* <label className="chklabel" id="AnyLoc"> */}

              {/* </label> */}
              <hr></hr>

              {/* Third  */}
              <div className="Menu_Heading">
                <h3 className="text-center FilterTitle">Rating</h3>
              </div>
              <div className="chk_container">
                <label className="chklabel">
                  <input
                    type="radio"
                    className="filtercheck"
                    value="Rating1"
                    name="filter"
                    onClick={handleFilterRating }
                  />
                  five stars
                </label>
                {/* <label className="chklabel">five stars</label> */}
              </div>
              <div className="chk_container">
                <label className="chklabel">
                  <input
                    type="radio"
                    className="filtercheck"
                    value="Rating2"
                    name="filter"
                    onClick={handleFilterRating }
                  />
                  four stars
                </label>
                {/* <label className="chklabel">four stars</label> */}
              </div>
              <div className="chk_container">
                <label className="chklabel">
                  <input
                    type="radio"
                    className="filtercheck"
                    value="Rating3"
                    name="filter"
                    onClick={handleFilterRating }
                  />
                  three stars
                </label>
                {/* <label className="chklabel">three stars</label> */}
              </div>
            </div>
          </div>
          <div className="col-md-9">
            {filteredItems?.map((place, i) => {
              counter2 += 1;
              counter += 1;

              return counter2 > startIndex && counter2 <= showedItems ? (
                <div
                  className="card mb-3 "
                  style={{ maxWidth: "780px" }}
                  key={place._id}
                >
                  <div className="row no-gutters placesCard">
                    <div className="col-md-4">
                      <Carousel activeIndex={index} onSelect={handleSelect}>
                        {place?.photos?.map((p) => (
                          <Carousel.Item>
                            <img
                              className="d-block w-100 MycardCarouselImg"
                              src={process.env.PUBLIC_URL + "/" + p}
                              alt="slide"
                            />
                          </Carousel.Item>
                        ))}
                      </Carousel>
                    </div>

                    <div className="card-body">
                      <Link  to={`/detail/${place?._id}`}><h5 className="card-title title" >{place?.placeName}</h5></Link>

                      <Rating
                        // placeholderRating={5}
                        stop={5}
                        initialRating={place.ratingCount}
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        fractions={2}
                        // value={this.state.form.facilityRate}
                        // onChange={this.state.form.handleStaffRatingChange}
                      />

                      <div className="card-compnents">
                        <div className="card-Price">
                          <h4>Price</h4>
                          <p className="card-text card-Price-P">
                            {place?.minPrice}-{place?.maxPrice}
                          </p>
                        </div>
                        <div className="card-Location">
                          <h4>Location</h4>
                          <p className="card-text card-Location-P">
                            {place?.location}
                          </p>
                        </div>
                        <div className="card-Review">
                          <h4>Reviews</h4>
                          <p className="card-text card-Review-P">
                            {place?.Reviewers?.length}
                          </p>
                        </div>
                      </div>
                      <p className="card-text C-txt">{place?.About}</p>
                      <p className="card-text">
                        <small className="text-muted">
                          {Date(place?.date)}
                        </small>
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <React.Fragment></React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
      <Pagination
        PageNo={PageNo}
        pageChange={props?.pageChange}
        pageSize={props?.pageSize}
        activePage={props?.activePage}
      ></Pagination>
    </React.Fragment>
  );
};

export default ListingPlaces;
