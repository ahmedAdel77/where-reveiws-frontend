import React, { Fragment } from 'react';

import { Container, Row, Col, Card, Button } from 'react-bootstrap';

import ReviewCardItem from './reviewCardItem';
import ReviewCardItemListSection from './reviewCardItemListSection';
import ImagesCollection from './imagesCollection';
import AboutSection from './aboutSection';
import Header from './header';
import Footer from './footer';

const Home = (props) => {
    const imgSources = {
        historical: [
            'img/Image -2.png',
            'img/Image 28.png',
            'img/Image 27.png',
        ],
        beaches: ['img/Image 29.png', 'img/Image 30.png', 'img/Image 31.png'],
        restaurants: [
            'img/Image 33.png',
            'img/Image 34.png',
            'img/Image 35.png',
        ],
    };
    // console.log(`imgSources`, imgSources[0]);
    return (
        <Fragment>
            <Header />

            <Container>
                <hr />
            </Container>

            <ImagesCollection />
            <AboutSection />
            <ReviewCardItemListSection
                sectionTitle={'Historical'}
                evenSection={false}
                cardsImgSrc={imgSources.historical}
            />
            <ReviewCardItemListSection
                sectionTitle={'Beaches'}
                evenSection={true}
                cardsImgSrc={imgSources.beaches}
            />
            <ReviewCardItemListSection
                sectionTitle={'Restaurants'}
                evenSection={false}
                cardsImgSrc={imgSources.restaurants}
            />

            <Footer />
        </Fragment>
    );
};

export default Home;
