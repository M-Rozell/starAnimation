import React, { useRef } from "react";
import { AnimationContainer, AnimationWrapper, ObjectAnimation, ObjectTwoAnimation, ObjectThreeAnimation } from "./animationElements";
import Icon from './images/starPort50.png'
import { motion } from "framer-motion";
import ObjectComponent from "./ObjectComponent";

const Animation = () => {

    // const Position = useRef({
    //     position: 'absolute',
    //     top: Math.floor(Math.random()*500),
    //     left: Math.floor(Math.random()*500),
    //     // transform: 'translate(-50%, -50%)'
    // })

    // const n = 166;

    // const iconVariant = {
    //     firstStyle: {
    //         scale: [1,1.5,2,2.5,2.5,2,1.5,1],
    //         rotate: [0, 90, 180, 270, 270, 180,90, 0],
    //         transition: { duration: 1}// repeat: Infinity delay: 1
    //     },
    //     secondStyle: {
    //         scale: [1,1.5,2,2.5,2.5,2,1.5,1],
    //         rotate: [0, 90, 180, 270, 270, 180,90, 0],
    //         transition: { duration: 1}// repeat: Infinity delay: 1
    //     },
    //     thirdStyle: {
    //         scale: [1,1.5,2,2.5,2.5,2,1.5,1],
    //         rotate: [0, 90, 180, 270, 270, 180,90, 0],
    //         transition: { duration: 1}// repeat: Infinity delay: 1,
    //     }    


    // }

    return (

        <AnimationContainer>
            <AnimationWrapper>

                <ObjectComponent />
            
            </AnimationWrapper>
        </AnimationContainer>

    )


}

export default Animation;