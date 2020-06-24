import React, { Fragment } from 'react';

import { Container, Card, Button } from 'react-bootstrap';

const AboutSection = (props) => {
    return (
        <Fragment>
            <section
                style={{
                    backgroundColor: '#F7F7F7',
                }}
                className="d-flex flex-column py-5"
            >
                <Container>
                    <h2 className="sectionTitle">About</h2>

                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'space-evenly',
                        }}
                    >
                        {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                        {/* <Card style={{ width: '300px', borderRadius: '0' }} bg="primary">
                        <Card.Body>
                            <Card.Title style={{ color: '#FFF' }}>
                                <h2>Where?</h2>{' '}
                            </Card.Title>
                            <Card.Text style={{ color: '#FFF' }}>
                                This is a longer card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </Card.Text>
                        </Card.Body>
                    </Card> */}

                        {/* <Card style={{ width: '500px', borderRadius: '0' }}> */}
                        {/* <Card.Img
                                variant="top"
                                src="img/Image 5.png"
                                variant="top"
                                thumbnail
                                style={{width: '200px'}}
                            /> */}
                        {/* <Card.Body>
                            <Card.Title>
                                <h2>Find the good out there</h2>
                            </Card.Title>
                            <Card.Text>
                                Where i s a review platform open to everyone.{' '}
                                <br />
                                Share your experiences, to help others make
                                better choices. <br />
                                Behind every review, an experience that matters.
                            </Card.Text>
                        </Card.Body>
                    </Card> */}

                        <div>
                            <h1>Find the good out there</h1>
                            Where i s a review platform open to everyone. <br />
                            Share your experiences, to help others make better
                            choices. <br />
                            Behind every review, an experience that matters.
                        </div>
                        <Card
                            style={{
                                width: '500px',
                                textAlign: 'center',
                                borderRadius: '0',
                            }}
                            bg="primary"
                        >
                            {/* <Card.Img variant="top" src="holder.js/100px160" /> */}
                            <Card.Body>
                                <Card.Title style={{ color: '#FFF' }}>
                                    <h2>Inspiration</h2>
                                </Card.Title>
                                <Card.Text style={{ color: '#FFF' }}>
                                    There are two major reasons why customer
                                    reviews are important. <br /> First,
                                    providing an opportunity to choose wisely
                                    where to go and have fun. <br />
                                    Second, sharing different people
                                    experiences.
                                </Card.Text>
                                <Button variant="outline-light">
                                    Read More
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Container>
            </section>
        </Fragment>
    );
};

export default AboutSection;
