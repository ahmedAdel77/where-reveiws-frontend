import React, { Fragment } from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import ReviewCardItemList from './reviewCardItemList';
import ReviewCardItem from './reviewCardItem';

const ReviewCardItemListSection = (props) => {
    const sectionBckgroundColor = props.evenSection ? '#F7F7F7' : '';
    const cardsImgSrc = props.cardsImgSrc;
    // console.log(`[ReviewCardItemListSection] `, props.cardsImgSrc);

    return (
        <section
            style={{
                backgroundColor: sectionBckgroundColor,
            }}
            className="d-flex flex-column py-5"
        >
            <Container>
                {props.sectionTitle ? (
                    <h2 className="sectionTitle">{props.sectionTitle}</h2>
                ) : (
                    ''
                )}
                <ReviewCardItemList cardsImgSrc={props?.cardsImgSrc} />
                <a href="" className="d-flex flex-row-reverse">
                    <p>See All &gt;&gt;</p>
                </a>
            </Container>
        </section>
    );
};

export default ReviewCardItemListSection;
