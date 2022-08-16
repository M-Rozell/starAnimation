import styled from "styled-components";
import { motion } from "framer-motion";


export const AnimationContainer = styled.div`
position: relative;
width: 100%;
height: 100vh;
/* background-color:  #f4b0a5; */
margin: 0;
padding: 0;
`

export const AnimationOneWrapper = styled.div`
width: 100%;
height: 100%;
top: 0;
left: 0;
position: absolute;
overflow: hidden;
background: transparent;
z-index: 0;
`
export const AnimationTwoWrapper = styled.div`
width: 100%;
height: 100%;
top: 0;
left: 0;
position: absolute;
overflow: hidden;
background: transparent;
z-index: 1;
`
export const AnimationThreeWrapper = styled.div`
width: 100%;
height: 100%;
top: 0;
left: 0;
position: absolute;
overflow: hidden;
background: transparent;
z-index: 1;
`

export const UlAnimation = styled.ul`
list-style-type: none;
position: relative;

margin: 0;
padding: 0;
background: transparent;
z-index: 0;
`

export const UlTwoAnimation = styled.div`
list-style-type: none;
position: relative;
margin: 0;
padding: 0;
background: transparent;
z-index: 1;
`
export const UlThreeAnimation = styled.div`
list-style-type: none;
position: relative;
margin: 0;
padding: 0;
background: transparent;
z-index: 2;
`

export const ObjectOneAnimation = styled.div`
`
export const ObjectTwoAnimation = styled.div`
`
export const ObjectThreeAnimation = styled.div`
`






