import React, { Component } from 'react'
import { TimelineLite } from 'gsap/all'
import VisibilitySensor from 'react-visibility-sensor'

export default class TextComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }

    this.subHeader = null
    this.body = null

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
    this.myTween = new TimelineLite({ paused: true })
      .staggerFromTo([this.subHeader, this.body], 1, { opacity: 0, y: '15%' }, { opacity: 1, y: '0%', ease: 'Power2.easeOut' }, 0.2)
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
        <div className='text-component-container'>
          {this.props.data.header ? <h2 className='text-component-header'>{this.props.data.header}</h2> : ''}
          <h4 className='text-component-sub-header' ref={elem => this.subHeader = elem}>{this.props.data.subHeader}</h4>
          <p className='text-component-body-text body-text' ref={elem => this.body = elem}>{this.props.data.body}</p>
        </div>
      </VisibilitySensor>
    )
  }
}
