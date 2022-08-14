import React, { useState } from "react";
import { AnimationContainer, AnimationWrapper, ObjectAnimation, ObjectTwoAnimation, ObjectThreeAnimation } from "./animationElements";
import Icon from './images/starPort50.png'
import { motion, useForceUpdate } from "framer-motion";
import ObjectComponent from "./ObjectComponent";
import ObjectTwoComponent from "./ObjectTwoComponent";
import { useEffect } from "react";
import FirstStyleList from './FirstStyle/FirstStyleList'


const Animation = () => {
 
    return (

        <AnimationContainer>
            <AnimationWrapper>

            <FirstStyleList /> 
               
            
            </AnimationWrapper>
        </AnimationContainer>

    )


}

export default Animation;