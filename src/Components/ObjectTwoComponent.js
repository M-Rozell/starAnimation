import React from 'react'
import ObjectComponent from './ObjectComponent'
import { UlAnimation } from './animationElements'

const range = (start, end) => {
    return Array(end - start + 1).fill().map((_, idx) => start + idx)
}
const rangeResult = range(1, 10);
console.log(rangeResult)

const listAnimations = rangeResult.map((e,i) => 
<li
key={i}
>{ <ObjectComponent />}</li>
)

function ObjectTwoComponent() {

  return (
    <UlAnimation>
        {listAnimations}
    </UlAnimation>
  )
  }
export default ObjectTwoComponent;