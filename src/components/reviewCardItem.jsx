import React, { Fragment } from 'react';

import { Card, Button } from 'react-bootstrap';
import Rating from 'react-rating';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';
import {
    faTwitter,
    faFacebookF,
    faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const ReviewCardItem = (props) => {
    return (
        <Card
            style={{ width: '350px', borderRadius: '0' }}
            className="card p-1 "
        >
            {/* <div className="card-image-container"> */}
            <Card.Img
                variant="top"
                src={props.cardImgSrc}
                // style={{ borderRadius: '0', width: '100%', objectFit: 'cover' }}
                className="card-image"
            />
            {/* </div> */}
            <Card.Body>
                <Card.Title className="card-title">
                    <h3>
                        <strong>blue lagoon Dahab</strong>
                    </h3>
                </Card.Title>
                <Card.Text className="card-text">
                    Some believe that hereditary factors are responsible for one
                    family producing generations of musical virtuosos, while
                    others suggest that our cultural and environmental
                </Card.Text>
                <Rating
                    readonly
                    initialRating={4}
                    // emptySymbol="fa fa-star-o fa-2x"
                    // fullSymbol="fa fa-star fa-2x"
                    fullSymbol={<FontAwesomeIcon icon={faStarSolid} />}
                    emptySymbol={<FontAwesomeIcon icon={faStarRegular} />}
                    // style={{ color: 'gold' }}
                    className="mr-3"
                />
                <small>50 Reviews </small>
            </Card.Body>
        </Card>
    );
};

export default ReviewCardItem;
