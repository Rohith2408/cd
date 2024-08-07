import { useRef, useState } from "react";
import styles from "./Section5.module.css";

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
            <button onClick={()=>setScale(scale==0?1:0)} className={styles.qWrapper}>
                <p className={styles.question}>{props.q}</p>
            </button>
            <div className={styles.answerWrapper} style={{transform:"scale("+scale+")"}}>
                <p className={styles.answer}>{props.a}</p>
            </div>
        </div>
    )
}

export default Section5