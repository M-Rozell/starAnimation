import styled from "styled-components";
import { motion } from "framer-motion";


export const AnimationContainer = styled.div`
position: relative;
width: 100%;
height: 100vh;
background-color:  #f4b0a5;
margin: 0;
padding: 0;
`

export const AnimationWrapper = styled.div`
width: 500px;
height: 500px;
position: relative;
`

export const ObjectAnimation = styled.div`
//position: absolute;
position: relative;
top: ${Math.floor(Math.random() * 100) + '%' };
left: ${Math.floor(Math.random() * 100) + '%'};
`

export const ObjectTwoAnimation = styled.div`
position: absolute;
top: ${Math.floor(Math.random() * 100) + '%' };
left: ${Math.floor(Math.random() * 100) + '%'};
`
export const ObjectThreeAnimation = styled.div`
position: absolute;
top: ${Math.floor(Math.random() * 100) + '%' };
left: ${Math.floor(Math.random() * 100) + '%'};
`






