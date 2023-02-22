import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import styles from '../../styles/LatestProjectStyles/LatestProject.module.scss';

const LatestProject = () => {
    return (
        <div className={`${styles.main1} container `}>
            <div className={`${styles.latestProject} mt-5`}>
                <div>
                    <h1>Latest Project</h1>
                </div>

                <div style={{ fontSize: "20px" }}>
                    <Breadcrumb>
                        <Breadcrumb.Item href="#">All Project</Breadcrumb.Item>
                        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">building</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Interior</Breadcrumb.Item>
                        <Breadcrumb.Item href="#">Restaurant</Breadcrumb.Item>
                    </Breadcrumb>
                </div>
            </div>

            <div className={`${styles.cards} mt-3`}>
                <Card border="dark" className='p-3' style={{ width: '16rem', height: '25rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card border="dark" className='p-3' style={{ width: '16rem', height: '25rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card border="dark" className='p-3' style={{ width: '16rem', height: '25rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>

                <Card border="dark" className='p-3' style={{ width: '16rem', height: '25rem' }}>
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link>
                    </Card.Body>
                </Card>
            </div>

            <div className={`${styles.mainInfo} mt-3`}>
                <div className={`${styles.inner_div_Of_MainInfo}`} >
                    <h1 className={`${styles.fent_heading}`} >AWESOME</h1>
                    <h5>DESIGNS</h5>
                </div>
            </div>
        </div>

    )
}

export default LatestProject