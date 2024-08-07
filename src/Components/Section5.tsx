import { useRef, useState } from "react";
import styles from "./Section5.module.css";
import dropdownicon from '../Images/Section5/down.png'

const Section5=()=>{

    const qa=useRef([
        {q:"How can I buy $CD",a:"Use raydium or pumpfun ,depending on how early you are"},
        {q:"What makes $CD better from others?",a:"We will live in the matrix forever so $CD lives forever"},
        {q:"Can $CD be listed on an exchange?",a:"yes , it's orginal"},
        {q:"Is this a community token?",a:"Yes we launch it and support it!"},
        {q:"Is there a road map?",a:"No"}
    ]).current

    return(
        <section className={styles.mainwrapper} id="section2" data-scroll-to="section2">
            <div className={styles.subwrapper}>
                <div className={styles.bodyWrapper}>
                    <p className={styles.title}>GOT QUESTIONS?</p>
                    <div className={styles.qaSectionWrapper}>
                    {
                        qa.map((item)=>
                        <Questioncontainer {...item}></Questioncontainer>
                        )
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}

const Questioncontainer=(props:{q:string,a:string})=>{

    const [scale,setScale]=useState(0)

    return(
        <div className={styles.qaWrapper}>
            <div style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",alignItems:"center"}}>
                <button onClick={()=>setScale(scale==0?1:0)} className={styles.qWrapper}>
                    <img src={dropdownicon} className={styles.dropdown} style={{transform:"rotate("+(scale==0)?"180deg":"0deg"+")"}}></img>
                </button>
                <p className={styles.question}>{props.q}</p>
            </div>
            <div className={styles.answerWrapper} style={{transform:"scaleX("+scale+")"}}>
                <p className={styles.answer}>{props.a}</p>
            </div>
        </div>
    )
}

export default Section5