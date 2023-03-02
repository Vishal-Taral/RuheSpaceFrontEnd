import React from 'react';
import styles from '../../styles/Designs.module.scss';
import Card from 'react-bootstrap/Card';

const Designs = ({ visibility }) => {
    const designsDetail = [
        {
            designImageUrl: "https://livinator.com/wp-content/uploads/2015/10/home-designging3.jpg",
            designType: "Classy",
            noOfDesigns: "3663"
        },
        {
            designImageUrl: "https://livinator.com/wp-content/uploads/2015/10/home-designging3.jpg",
            designType: "Primium",
            noOfDesigns: "3773"
        },
        {
            designImageUrl: "https://livinator.com/wp-content/uploads/2015/10/homedecorb-tk.jpg",
            designType: "Luxury",
            noOfDesigns: "2229"
        },
        {
            designImageUrl: "https://livinator.com/wp-content/uploads/2015/10/home-designging3.jpg",
            designType: "false cailing Design",
            noOfDesigns: "3773"
        },
        {
            designImageUrl: "https://livinator.com/wp-content/uploads/2015/10/homedecorb-tk.jpg",
            designType: "bathrrom",
            noOfDesigns: "2229"
        }
    ];


    const cardStyle = {
        display: "none"
    }

    return (
        <div className={`${styles.designs}`}>
            <div className={`${styles.inner_div} container`}>{designsDetail.map((details, index) => {
                return (
                    <Card style={visibility ? { width: '22rem' } : cardStyle} className={`${styles.design_card} col-4`} key={index}>
                        <Card.Img variant="top" src={details.designImageUrl} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>125 designs</Card.Text>
                        </Card.Body>
                    </Card>
                )
            })}

            </div>
        </div>
    )
}

export default Designs