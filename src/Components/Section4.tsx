import styles from "./Section4.module.css";

const Section4=()=>{

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.bodyWrapper}>
                    <div className={styles.body}>
                        <div className={styles.gridWrapper}>
                            <p className={styles.gridText}>1B</p>
                            <p className={styles.gridText}>$CD</p>
                        </div>
                        <div className={styles.gridWrapper}>
                            <p className={styles.gridText}>0%</p>
                            <p className={styles.gridText}>Tax</p>
                        </div>
                        <div className={styles.gridWrapper}>
                            <p className={styles.gridText}>Mint</p>
                            <p className={styles.gridText}>Revoked</p>
                        </div>
                        <div className={styles.gridWrapper}>
                            <p className={styles.gridText}>LP</p>
                            <p className={styles.gridText}>Burned</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section4