import React from 'react'
import Icon from '../images/starPort50.png'
import { motion } from "framer-motion";
import { ObjectAnimation } from '../animationElements';
import '../animation.css'

const n = 1;


const iconVariant = {
    animationStyle: {
        scale: [1, 1.5, 2, 2.5, 3, 3, 2.5, 2, 1.5, 1],
        rotate: [0, 90, 180, 270, 360, 360, 270, 180, 90, 0],
        transition: { duration: 1 },// repeat: Infinity delay: 1

    }
}

export default function FirstStyle() {


    const randomize = Math.floor(Math.random() * 100) + '%';

    return [...Array(n)].map((e, i) => <span
        key={i}
        className="spanAnimation"
        style={{ top: randomize, left: randomize }}

    >

        <ObjectAnimation>
            <motion.img

                className="motionImg"
                src={Icon}
                variants={iconVariant}
                animate='animationStyle'

            >
            </motion.img>
        </ObjectAnimation>

    </span>


    )
};