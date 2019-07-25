import React, { Component } from 'react'
import { TimelineLite } from 'gsap/all'
import VisibilitySensor from 'react-visibility-sensor'

import learningImg from './../media/reactNative.png'
import { ReactComponent as CogsImg } from './../media/cogs.svg'
import { ReactComponent as CogImg } from './../media/cog.svg'

export default class LearningComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }

    this.header = null
    this.image = null
    this.cogs = null
    this.footer = null

    this.visibilityHandler = this.visibilityHandler.bind(this)

  }

  visibilityHandler(isVisible) {
    if (isVisible) {
      this.setState({ visible: true })
    } else {
      this.setState({ visible: false })
    }
  }

  componentDidMount() {
    const tweenList = [this.header, this.image, this.footer]
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
    return (
      <VisibilitySensor onChange={this.visibilityHandler} partialVisibility>
        <div className='learning-wrapper'>
          <p className='learning-header body-text' ref={elem => this.header = elem}>{this.props.data.header}</p>
          <div className='image-container' ref={elem => this.image = elem}>
            <img className='learning-image' src={learningImg}/>
          </div>
          <p className='learning-footer' ref={elem => this.footer = elem}>{this.props.data.footer}</p>
          <div className='cogs-image-container' ref={elem => this.cogs = elem}>
            {Array(3).fill().map((_, index) => (
              <CogImg className={`cogs-image cog-${index}`}/>
            ))}
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}