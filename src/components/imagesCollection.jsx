import React, { Fragment } from 'react';

import { Container, Row, Col, Image } from 'react-bootstrap';

const ImagesCollection = (props) => {
    return (
        <Fragment>
            <Container
                style={{
                    marginTop: '20px',
                    marginBottom: '150px',
                    // width: '570px',
                    // height: '20px',
                }}
            >
                {/* <Row>
                    <Col lg={4}>
                        <Image src="img/Image 8.png" />
                        </Col>
                        <Col lg={4}>
                        <Image src="img/Image 8.png" />
                        </Col>
                        <Col lg={2}>
                        <Image src="img/Image 8.png" />
                        </Col>
                        <Col lg={2}>
                        <Image src="img/Image 8.png" />
                        </Col>
                    </Row> */}
                {/* <div className=".d-flex flex-row justify-content-start">
                    <Image src="img/Image 8.png" width="277px" />
                    <Image src="img/Image 8.png" width="277px" />
                    <Image src="img/Image 8.png" width="277px" />

                    <div className="">
                        <Image src="img/Image 8.png" width="277px" />
                        <Image src="img/Image 8.png" width="277px" />
                    </div>
                </div> */}
                <div
                    style={{
                        display: 'flex',
                        // justifyContent: 'space-between',
                        height: '400px',
                    }}
                >
                    <Image src="img/Image 8.png" width="277px" thumbnail />
                    <Image
                        src="img/Image 2.png"
                        // width="100%"
                        style={{ overflow: 'hidden' }}
                        thumbnail
                    />
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            // height: '400px',
                        }}
                    >
                        <Image
                            src="img/Image 3.png"
                            // width="277px"
                            // height="200px"
                            thumbnail
                        />
                        <Image
                            src="img/Image 4.png"
                            width="277px"
                            // height="200px"
                            thumbnail
                        />
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '400px',
                        }}
                    >
                        <Image
                            src="img/Image 6.png"
                            width="277px"
                            height="200px"
                            thumbnail
                        />
                        <Image
                            src="img/Image 28.png"
                            width="277px"
                            height="200px"
                            thumbnail
                        />
                        <Image
                            src="img/Image 12.png"
                            width="277px"
                            height="200px"
                            thumbnail
                        />
                    </div>
                </div>
            </Container>
        </Fragment>
    );
};

export default ImagesCollection;
