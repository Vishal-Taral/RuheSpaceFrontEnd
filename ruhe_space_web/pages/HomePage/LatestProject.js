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

                <div className={`mt-2`} style={{ fontSize: "20px" }}>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#" className={`${styles.links}`}>All Project</a></li>
                            <li className="breadcrumb-item"><a href="https://react-bootstrap.netlify.app/components/breadcrumb/" className={`${styles.links}`}>building</a></li>
                            <li className="breadcrumb-item"><a href="#" className={`${styles.links}`}>Interior</a></li>
                            <li className="breadcrumb-item"><a href="#" className={`${styles.links}`}>Restaurant</a></li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className={`${styles.cards} mt-3`}>
                <Card className={`${styles.actual_card}`} border="dark" >
                    <Card.Body>
                        <Card.Img src="https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=" width="100%" height="100%" />
                        {/* <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>

                <Card border="dark" className={`${styles.actual_card}`}>
                    <Card.Body>
                        <Card.Img src="https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=" width="100%" height="100%" />
                        {/* <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>

                <Card border="dark" className={`${styles.actual_card}`}>
                    <Card.Body>
                        <Card.Img src="https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=" width="100%" height="100%" />
                        {/* <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
                    </Card.Body>
                </Card>

                <Card border="dark" className={`${styles.actual_card}`}>
                    <Card.Body>
                        <Card.Img src="https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=" width="100%" height="100%" />
                        {/* <Card.Title>Card Title</Card.Title>
                        <Card.Subtitle className="mb-2">Card Subtitle</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                        </Card.Text>
                        <Card.Link href="#">Card Link</Card.Link>
                        <Card.Link href="#">Another Link</Card.Link> */}
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