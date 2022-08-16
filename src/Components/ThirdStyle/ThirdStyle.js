import React from 'react'
import Icon from '../images/starPort50.png'
import { motion } from "framer-motion";
import { ObjectThreeAnimation } from '../animationElements';
import '../animation.css'

const n = 1;


const iconVariant = {
    thirdAnimationStyle: {
        scale: [0.25, 0.5, 0.75, 1, 1.25, 1.25, 1, 0.75, 0.5, 0.25],
        rotate: [0, 90, 180, 270, 360, 360, 270, 180, 90, 0],
        transition: { delay: 0.25, duration: 1 },// repeat: Infinity delay: 1
        opacity: 1
    }
}

export default function ThirdStyle() {


    const randomize = Math.floor(Math.random() * 100 ) + '%';

    return [...Array(n)].map((e, i) => <span
        key={i}
        className="spanAnimation"
        style={{ top: randomize, left: randomize }}

    >

        <ObjectThreeAnimation>
            <motion.img

                className="motionImg"
                src={Icon}
                variants={iconVariant}
                initial= {{opacity: 0}}
                animate='thirdAnimationStyle'
                exit= {{opacity: 0}}

            >
            </motion.img>
        </ObjectThreeAnimation>

    </span>


    )
};