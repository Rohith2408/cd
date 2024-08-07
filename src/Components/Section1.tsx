import styles from "./Section1.module.css";
import cd_gif from '../Images/Section1/cd.gif'
import { useEffect, useRef, useState } from "react";
import img1 from '../Images/Section1/1.png'
import img2 from '../Images/Section1/2.png'
import img3 from '../Images/Section1/3.png'
import img4 from '../Images/Section1/4.png'
import img5 from '../Images/Section1/5.png'
import img6 from '../Images/Section1/6.png'
import img7 from '../Images/Section1/7.png'
import img8 from '../Images/Section1/8.png'
import img9 from '../Images/Section1/9.png'
import img10 from '../Images/Section1/10.png'

const Section1=()=>{
    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.bodyWrapper}>
                    <div className={styles.grid}>
                        <Griditem index={0}></Griditem>
                        <Griditem index={1}></Griditem>
                        <Griditem index={2}></Griditem>
                        <Griditem index={3}></Griditem>
                        <Griditem index={4}></Griditem>
                        <Griditem index={5}></Griditem>
                        <Griditem index={6}></Griditem>
                        <Griditem index={7}></Griditem>
                        <Griditem index={8}></Griditem>
                    </div>
                    <div className={styles.body}>
                        <img className={styles.gif} src={cd_gif} ></img>
                        <div className={styles.titleWrapper}>
                            <p className={styles.title}>$CD</p>
                            <p className={styles.text}>In a world gone topsy-turvy, where chaos reigns supreme and the absurd has become the new normal, there’s one thing we can all agree on: it couldn’t be better.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const Griditem=(props:{index:number})=>{

    const images=useRef([img1,img2,img3,img4,img5,img6,img7,img8,img9]).current
    const [currentImage,setCurrentImage]=useState(props.index);
    const timer=useRef<any>()

    useEffect(() => {
        const setImage = () => {
          setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        };
    
        timer.current = setInterval(setImage, 700+Math.random()*200);
    
        return () => {
          clearInterval(timer.current);
        };
      }, [props.index, images.length]);


    return(
        <img src={images[currentImage]} style={{borderTopLeftRadius:props.index==0?"50px":0,borderTopRightRadius:props.index==2?"50px":0,borderBottomLeftRadius:props.index==6?"50px":0,borderBottomRightRadius:props.index==8?"50px":0}} className={styles.gridItem}></img>
    )
}

export default Section1