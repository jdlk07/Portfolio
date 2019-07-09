import React, { Component } from 'react'
import { TimelineLite } from 'gsap/all'


import { ReactComponent as PlaneImg } from './plane.svg'

export default class Map extends Component {
  constructor(props) {
    super(props)

    this.myTween = null

    this.plane = null
  }

  componentDidMount() {
    this.myTween = new TimelineLite({paused: true})
      .to(this.plane, 0, {rotation: '-50deg'})
      .to(this.plane, 2, {x: '250px', y: '-230px', ease: 'Power0.easeNone', delay: -0.5})
    this.myTween.play()
  }

  render() {
    return(
      <PlaneImg className='plane-svg' ref={elem => this.plane = elem}/>
    )
  }
}
