import React from 'react';
import styles from '../../styles/FullInterior.module.scss';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const FullInterior = ({ full_interior, visibility, cardVisiblity }) => {
    // const [cardVisiblity, setCardVisiblity] = useState(false);

    // const toggleCardVisiblity = () => {
    //     setCardVisiblity(!cardVisiblity)
    // }

    const full_interior_details = {
        componentName: "Full Home Interior",
        description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure dicta aliquid neque aliquam mollitia, praesentium ut magni facere autem expedita corporis nam quisquam debitis magnam veritatis natus cum assumenda rem?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi et quos delectus obcaecati non, sed voluptatem quo aut earum voluptatum tempore labore enim soluta unde error sint omnis dignissimos minus.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum tenetur deserunt cumque porro voluptatibus voluptatum iusto temporibus officia ducimus! Fugit, totam. Doloremque cupiditate dicta ea ducimus vero provident, tempora suscipit?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rerum commodi, ad autem quos et sequi consectetur, officiis non necessitatibus aliquam amet placeat odio esse modi cum atque quaerat error.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, aliquam tenetur consequuntur incidunt labore qui nam. Odio veniam, pariatur saepe hic id, a deleniti sapiente perspiciatis illum, adipisci culpa dolores.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, perferendis repellendus, porro perspiciatis tempora mollitia cum magnam rem alias incidunt quidem consequuntur quae labore sint provident nulla ut consectetur voluptatum.`
    }

    return (
        <div className={`${styles.full_interior}`}>
            <div className={`${styles.inner_div} ${full_interior ? styles.inner_div1 : styles.inner_div2} mt-5`}>
                <div className={`${styles.left}  `}>
                    <h2 className={styles.heading}>{full_interior_details.componentName}</h2>
                    <p className={`${styles.full_interior_detail} mt-4`}>{full_interior_details.description}</p>

                    {full_interior ? (
                        <div className={`${styles.action_icon}`}>
                            <FontAwesomeIcon className={`${styles.down_icon}`} icon={visibility ? faChevronUp : faChevronDown} onClick={() => {
                                cardVisiblity(visibility)
                            }} />
                        </div>
                    ) : <></>}

                </div>

                <div className={`${styles.right}`}>
                    <img className={`${styles.left_image}`} src="https://livinator.com/wp-content/uploads/2015/10/home-designging3.jpg" alt="full interior" />
                </div>
            </div>
        </div>
    )
}

export default FullInterior