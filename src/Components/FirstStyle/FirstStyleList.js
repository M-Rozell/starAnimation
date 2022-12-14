import React from 'react'
import { UlAnimation } from '../animationElements'
import FirstStyle from './FirstStyle'

const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
const rangeResult = range(1, 10);
console.log(rangeResult)

const listAnimations = rangeResult.map((e, i) =>
    <li
        className='listOneAnimation'
        key={i}
    >{<FirstStyle />}</li>
)

export default function ObjectOneComponent() {
 
return (
<>
       <UlAnimation>
            {listAnimations}
        </UlAnimation> 
</>

    )
};
