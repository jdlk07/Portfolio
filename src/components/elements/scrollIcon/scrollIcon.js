import React from 'react'

import './scrollIcon.scss'

import { ReactComponent as MouseOuter } from './mouse_outer.svg'
import { ReactComponent as MouseInner } from './mouse_inner.svg'

const scrollIcon = React.forwardRef((props, ref) => {
  return (
    <div className='scroll-icon-container' ref={ref}>
      <MouseOuter className='mouse-outer'/>
      <MouseInner className='mouse-inner'/>
    </div>
  )
})

export default scrollIcon
