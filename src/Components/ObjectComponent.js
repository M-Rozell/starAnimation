import React, { useState } from 'react'
import Icon from './images/starPort50.png'
import { motion } from "framer-motion";
import { ObjectAnimation, ObjectTwoAnimation, ObjectThreeAnimation } from './animationElements';
import styled from 'styled-components';
import { useEffect } from 'react';

const n = 3;

const iconVariant = {
    firstStyle: {
        scale: [1, 1.5, 2, 2.5, 2.5, 2, 1.5, 1],
        rotate: [0, 90, 180, 270, 270, 180, 90, 0],
        transition: { duration: 1},// repeat: Infinity delay: 1
        

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
    const [loop, setLoop ] = useState()

    


    return [...Array(n)].map((e, i) => <span key={i}>

       <ObjectAnimation >
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
    

)}

