import React, { Fragment } from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import ReviewCardItem from './reviewCardItem';

const ReviewCardItemList = (props) => {
    // console.log('[ReviewCardItemList]: ', Array.from(props.cardsImgSrc));
    return (
        // <div
        //     // style={{ display: 'flex', justifyContent: 'space-evenly' }}
        //     className="d-flex justify-content-between mb-2 flex-wrap"
        // >
        //     <ReviewCardItem cardImgSrc={props.cardsImgSrc[0]} cardTitle={''} />
        //     <ReviewCardItem cardImgSrc={props.cardsImgSrc[1]} />
        //     <ReviewCardItem cardImgSrc={props.cardsImgSrc[2]} />
        // </div>
        <div
            // style={{ display: 'flex', justifyContent: 'space-evenly' }}
            className="justify-content-md-center"
        >
            <Row lg={3} md={1} xs={1}>
                <Col>
                    <ReviewCardItem
                        cardImgSrc={props.cardsImgSrc[0]}
                        cardTitle={''}
                    />
                </Col>
                <Col>
                    <ReviewCardItem cardImgSrc={props.cardsImgSrc[1]} />
                </Col>
                <Col>
                    <ReviewCardItem cardImgSrc={props.cardsImgSrc[2]} />
                </Col>
            </Row>
        </div>
    );
};

export default ReviewCardItemList;
