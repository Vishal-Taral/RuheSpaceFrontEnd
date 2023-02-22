import React from 'react'
import styles from '../../styles//SomeInfoStyles_inHowItWorks/SomeInfo.module.scss';

const SomeInfo = () => {
    return (
        <div className={`${styles.SomeInfo} container mt-5`}>
            <div className={`${styles.outer}`}>
                <div className={`${styles.param}`}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quam earum obcaecati facilis inventore! Incidunt praesentium iure eveniet illum culpa, recusandae nemo mollitia nesciunt voluptatum aliquid accusamus asperiores a velit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore explicabo corrupti qui totam nihil, quam aperiam laborum vero suscipit expedita obcaecati facilis facere deserunt enim repellat placeat quibusdam non.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a explicabo iste consectetur quasi doloribus optio corporis. Aliquam, dignissimos accusamus soluta amet quas sit, deleniti aperiam reprehenderit, nulla cum numquam!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ad aut aliquid voluptatum quidem corrupti iure blanditiis, aliquam harum doloribus eum dolor ex magnam. Quaerat quos ipsam tempore reprehenderit recusandae.
                    </p>
                </div>
                <div className={`${styles.param}`}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium quam earum obcaecati facilis inventore! Incidunt praesentium iure eveniet illum culpa, recusandae nemo mollitia nesciunt voluptatum aliquid accusamus asperiores a velit.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempore explicabo corrupti qui totam nihil, quam aperiam laborum vero suscipit expedita obcaecati facilis facere deserunt enim repellat placeat quibusdam non.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem a explicabo iste consectetur quasi doloribus optio corporis. Aliquam, dignissimos accusamus soluta amet quas sit, deleniti aperiam reprehenderit, nulla cum numquam!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ad aut aliquid voluptatum quidem corrupti iure blanditiis, aliquam harum doloribus eum dolor ex magnam. Quaerat quos ipsam tempore reprehenderit recusandae.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default SomeInfo;