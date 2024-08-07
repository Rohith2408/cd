import styles from "./Section2.module.css";

const Section2= () => {

  return (
    <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
      <div className={styles.subwrapper}>
        <div className={styles.imageWrapper}>
            <div className={styles.textWrapper}>
                <p className={styles.text}>
                The idea behind $CD was inspired by the famous Disaster Girl meme, 
                where a young girl looks on with a knowing smile as chaos unfolds behind her.
                This iconic image perfectly captures the essence of $CD: a tongue-in-cheek
                commentary on the world's current state and a nod to the indomitable spirit 
                that finds joy amidst chaos.
                </p>
                <ul className={styles.pointsWrapper}>
                    <li className={styles.points}>Crypto Market Crashes? Watch your portfolio dwindle while smirking, “Couldn’t be better.”</li>
                    <li className={styles.points}>The 2024 Olympics Featuring Unprecedented Matchups? Marvel at the spectacle and think, “Couldn’t be better.”</li>
                    <li className={styles.points}>Outlandish Political Debates? Tune in for the circus and cheer, “Couldn’t be better.”</li>
                    <li className={styles.points}>Mind-Boggling Trends and Fads? Embrace the chaos and declare, “Couldn’t be better.”</li>
                </ul>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
