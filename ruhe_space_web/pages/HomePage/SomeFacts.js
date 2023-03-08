import React from 'react';
import styles from '../../styles/SomeFactsStyles/SomeFact.module.scss';

const SomeFacts = () => {
    return (
        <div className={`${styles.some_facts}`}>
            <div className={`${styles.outer}`}>
                <div className={`${styles.outer_left}`}>
                    <h1>SOME</h1>
                    <h1>INTRESTING FACTS</h1>
                    <p>Morbi mattis ex non urna condimentum, eget eleif end diam molestie. Curabitur lorem enim, maximus non nulla sed, egestas venenatis felis.</p>
                </div>

                <div className={`${styles.outer_right}`}>
                    <div className={`${styles.one}`}>
                        <div className={`${styles.numbers}`}>
                            <h1 className={styles.count}>325</h1>
                            <h5 className={styles.client_type}>Happy Client</h5>
                        </div>
                        <div className={`${styles.numbers}`}>
                            <h1 className={styles.count}>400</h1>
                            <h5 className={styles.client_type}>Happy Client</h5>
                        </div>
                        <div className={`${styles.numbers} `}>
                            <h1 className={styles.count}>300</h1>
                            <h5 className={styles.client_type}>Happy Client</h5>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default SomeFacts