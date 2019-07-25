import React, { Component } from 'react'
import { TimelineLite } from 'gsap/all'
import VisibilitySensor from 'react-visibility-sensor'

import { ReactComponent as MapImg } from './map.svg'
import { ReactComponent as PlaneImg } from './plane.svg'

export default class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }

    this.visibilityHandler = this.visibilityHandler.bind(this)
    
    this.map = null
    this.plane = null
    this.text = null
  }

  visibilityHandler(isVisible) {
    if (isVisible) {
      this.setState({ visible: true })
    } else {
      this.setState({ visible: false })
    }
  }

  componentDidMount() {
    const tweenList = [this.map, this.plane, this.text]
    this.myTween = new TimelineLite({ paused: true })
    .staggerFromTo(tweenList, 1, { opacity: 0, y: '15%' }, { opacity: 1, y: '0%', ease: 'Power2.easeOut' }, 0.2)

  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.visible !== this.state.visible && this.state.visible) {
      this.myTween.play()
    } else {
      this.myTween.reverse()
    }
  }

  render() {
    return(
      <VisibilitySensor onChange={this.visibilityHandler} partialVisibility>
        <div className='map-wrapper'>
          <div className='images-container'>
            <MapImg className='map-svg' ref={elem => this.map = elem}/>
            <div className='plane-orbit'>
              <PlaneImg className='plane-svg' ref={elem => this.plane = elem}/>
            </div>
          </div>
          <div className='text-container' ref={elem => this.text = elem}>
            <p className='stats-text'>Countries: <span>62</span></p>
            <p className='stats-text'>Cities: <span>95</span></p>
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}
