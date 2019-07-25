import React, { Component } from 'react'
import { TimelineLite } from 'gsap/all'
import VisibilitySensor from 'react-visibility-sensor'

export default class BannerCaption extends Component {
  constructor(props) {
    super(props)

    this.state = {
      visible: false
    }

    this.banner = null
    this.text = null

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
      .fromTo(this.banner, 1, {x: '60%', opacity: 1}, {x: '0%', opacity: 1, ease: 'Power2.easeOut'})
      .fromTo(this.text, 0.4, {y: '5%', opacity: 0}, {y: '0%', opacity: 1, ease: 'Power1.easeOut'})

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
        <div className='page-highlight-caption' ref={elem => this.banner = elem}>
          <p className='body-text' ref={elem => this.text = elem}>{this.props.Data.highlightCaption}</p>
        </div>
      </VisibilitySensor>
    )
  }
}