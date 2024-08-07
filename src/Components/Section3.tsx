import styles from "./Section3.module.css";
import cd from '../Images/Section3/cd.png'

const Section3=()=>{

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.bodyWrapper}>
                    <p className={styles.title}>WHY SHOULD YOU BUY $CD</p>
                    <ul className={styles.pointsWrapper}>
                        <li className={styles.points}>Because you hate leftists</li>
                        <li className={styles.points}>You love satire and freedom of speech</li>
                        <li className={styles.points}>You want to drive a lambo and have fun</li>
                        <li className={styles.points}>You are the 1%</li>
                    </ul>
                    <img className={styles.image} src={cd}></img>
                </div>
            </div>
        </section>
    )
}

export default Section3