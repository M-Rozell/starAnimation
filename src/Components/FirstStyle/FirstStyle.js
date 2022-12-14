import React from 'react'
import Icon from '../images/starPort50.png'
import { motion } from "framer-motion";
import { ObjectOneAnimation } from '../animationElements';
import '../animation.css'

const n = 1;


const iconVariant = {
    animationStyle: {
        scale: [1, 1.25, 1.75, 2, 2.25, 2.25, 2, 1.75, 1.25, 1],
        rotate: [0, 90, 180, 270, 360, 360, 270, 180, 90, 0],
        transition: { delay: 1, duration: 1 },// repeat: Infinity delay: 1
        opacity: 1

    }
}

export default function FirstStyle() {


    const randomize = Math.floor(Math.random() * 100) + '%';

    return [...Array(n)].map((e, i) => <span
        key={i}
        className="spanAnimation"
        style={{ top: randomize, left: randomize }}

    >

        <ObjectOneAnimation>
            <motion.img

                className="motionImg"
                src={Icon}
                variants={iconVariant}
                initial={{ opacity: 0 }}
                animate='animationStyle'
                exit={{ opacity: 0 }}



            >
            </motion.img>
        </ObjectOneAnimation>

    </span>


    )
};