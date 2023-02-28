import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Card from 'react-bootstrap/Card';
import styles from '../../styles/LatestProjectStyles/LatestProject.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

const LatestProject = () => {
    const Project_card_details = [
        {
            image_url: "https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=",
        },
        {
            image_url: "https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=",
        },
        {
            image_url: "https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=",
        },
        {
            image_url: "https://media.istockphoto.com/id/1392990621/photo/smart-handsome-positive-indian-or-arabian-guy-with-glasses-in-casual-wear-student-or.jpg?b=1&s=170667a&w=0&k=20&c=kYBQv7SKom27u83XwPbuCUkcmklb8TVTnZoSTuC5Rjo=",
        },
    ]
    return (
        <div className={`${styles.main1} container `}>
            <div>
                <h1>Latest Project</h1>
            </div>

            <div className={`${styles.latestProject} `}>
                <div className={`${styles.line}`}></div>
                <div className={`mt-2`} style={{ fontSize: "20px" }}>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="#" className={`${styles.links}`}>All Project</a></li>
                            <li className="breadcrumb-item"><a href="https://react-bootstrap.netlify.app/components/breadcrumb/" className={`${styles.links}`}>Building</a></li>
                            <li className="breadcrumb-item"><a href="#" className={`${styles.links}`}>Interior</a></li>
                            <li className="breadcrumb-item"><a href="#" className={`${styles.links}`}>Restaurant</a></li>
                        </ol>
                    </nav>
                </div>
            </div>

            <div className={`${styles.cards} mt-3`}>{Project_card_details.map((details) => {
                return (
                    <Card className={`${styles.actual_card}`} border="dark" >
                        <Card.Body>
                            <Card.Img src={details.image_url} width="100%" height="100%" />
                        </Card.Body>
                    </Card>
                )
            })}
            </div>

            <div className={`${styles.left_right_icon}`}>
                <div className={`${styles.icons} mt-5`}>
                    <div className={`${styles.less_than_icon}`}><FontAwesomeIcon icon={faLessThan} style={{ color: "white" }} /></div>
                </div>

                <div className={`${styles.icons} mt-5`}>
                    <div className={`${styles.greater_than_icon}`}><FontAwesomeIcon icon={faGreaterThan} style={{ color: "white" }} /></div>
                </div>
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