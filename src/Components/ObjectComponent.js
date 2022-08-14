import React, { useState } from 'react'
import Icon from './images/starPort50.png'
import { motion } from "framer-motion";
import { ObjectAnimation, ObjectTwoAnimation, ObjectThreeAnimation } from './animationElements';
import styled from 'styled-components';
import { useEffect } from 'react';
import './animation.css'

const n = 1;
// const range = (start, end) => {
//     return Array(end - start + 1).fill().map((_, idx) => start + idx)
// }
// const rangeResult = range(1, 10);
// console.log(rangeResult)

const iconVariant = {
    firstStyle: {
        scale: [1, 1.5, 2, 2.5, 2.5, 2, 1.5, 1],
        rotate: [0, 90, 180, 270, 270, 180, 90, 0],
        transition: { duration: 1 },// repeat: Infinity delay: 1


    },
    secondStyle: {
        scale: [1, 1.5, 2, 2.5, 2.5, 2, 1.5, 1],
        rotate: [0, 90, 180, 270, 270, 180, 90, 0],
        transition: { duration: 1 },// repeat: Infinity delay: 1

    },
    thirdStyle: {
        scale: [1, 1.5, 2, 2.5, 2.5, 2, 1.5, 1],
        rotate: [0, 90, 180, 270, 270, 180, 90, 0],
        transition: { duration: 1 },// repeat: Infinity delay: 1,
    }
}

// const RandomPosition = styled.div`
// position: absolute;
// top: ${ props => props.randomX}%;
// left: ${ props => props.randomY}%;
// animation: ${divAnimation( props => props.randomY)}
// 0.5s linear
// `;



export default function ObjectComponent() {

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
                animate='firstStyle'

            >
            </motion.img>
        </ObjectAnimation>

    </span>
        // {/* <ObjectTwoAnimation >
        //     <motion.img
        //         className="motionImg"
        //         src={Icon}
        //         variants={iconVariant}
        //         animate='secondStyle'
        //     >
        //     </motion.img>
        // </ObjectTwoAnimation>

        // <ObjectThreeAnimation >
        //     <motion.img
        //         className="motionImg"
        //         src={Icon}
        //         variants={iconVariant}
        //         animate='thirdStyle'
        //     >
        //     </motion.img>
        // </ObjectThreeAnimation> */}


    )
}

