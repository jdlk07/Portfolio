import React, { Component } from 'react'
import { TimelineLite } from 'gsap/all'

import ScrollIcon from './../../elements/scrollIcon/scrollIcon'

export default class Intro extends Component {
  constructor(props) {
    super(props)

    this.state = {
      expand: false
    }

    this.textContainer = null
    this.readMoreBtn = null
    this.bodyText2 = null
    this.bodyText3 = null
    this.heroContainer = null
    this.heroImage = null
    this.scrollIcon = null

    this.myTween = null

    this.scrollHandler = this.scrollHandler.bind(this)
    this.clickHandler = this.clickHandler.bind(this)
    this.animationCompleteHandler = this.animationCompleteHandler.bind(this)
  }

  scrollHandler(event) {
    if (window.pageYOffset === 0) {
      if (event.nativeEvent.wheelDelta > 0 && this.state.expand) {
        console.log('scrolled Up!')
        this.setState({expand: !this.state.expand})
      } else if (event.nativeEvent.wheelDelta < 0 && !this.state.expand) {
        console.log('scrolled Down!')
        this.setState({expand: !this.state.expand})
      }
    }
  }

  clickHandler() {
    this.setState({ expand: true })
  }

  //Unlock scroll after animation is complete and intro is expanded.
  animationCompleteHandler() {
    if (this.state.expand) {
      document.body.style.overflow = ''
    }
  }

  componentDidMount() {
    this.myTween = new TimelineLite({paused: true, onComplete: this.animationCompleteHandler })
      .to(this.scrollIcon, 0.5, {opacity: 0, ease: 'Power1.easeOut'})
      .to(this.heroContainer, 0.8, {height: '70%', marginRight: '20%', delay: -0.5, ease: 'Power4.easeInOut'})
      .to(this.heroImage, 0.8, {scale: '1.2', x: '6%', delay: -0.8, ease: 'Power4.easeInOut'})
      .to(this.textContainer, 0.8 ,{scale: 1, delay: -0.8, ease: 'Power4.easeInOut'})
      .to(this.readMoreBtn, 0.5, {opacity: 0, y: '-100%', cursor: 'none', delay: -0.5, ease: 'Power1.easeOut'})
      .to(this.textContainer, 0.5 ,{y: 0, delay: 0.1, ease: 'Power3.easeOut'})
      .to(this.bodyText2, 0.5, {opacity: 1, y: 0, delay: -0.5, ease: 'Power2.easeOut'})
      .to(this.bodyText3, 0.5, {opacity: 1, y: 0, delay: -0.5, ease: 'Power2.easeOut'})
      .to(this.scrollIcon, 0.5, {opacity: 1, ease: 'Power1.easeIn'})

//Locks scrolling on load / update if at the top of the page.
console.log(window.scrollY)
      if (window.pageYOffset === 0) {
        console.log("hidden on mount!")
        document.body.style.overflow = 'hidden'
      } else {
        this.setState({expand: true})
      }
//Locks scrolling and changes expand state back to false when the top of the page is reached.
      window.onscroll = () => {
        if (window.pageYOffset === 0) {
          document.body.style.overflow = 'hidden'
          this.setState({expand: false})
        }
      }
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.expand !== this.state.expand && this.state.expand) {
      this.myTween.play()
    } else if (prevState.expand !== this.state.expand && !this.state.expand ) {
      this.myTween.reverse()
    }
  }
  render() {
    return(
      <div className='intro-wrapper' onWheel={this.scrollHandler}>
        <div className='content-container'>
          <div className='text-container' ref={elem => this.textContainer = elem}>
            <div className='process-container'>
              <div className='text-wrapper'>
                <p>{this.props.Data.process[0]}</p>
                <span className='dot'></span>
                <p>{this.props.Data.process[1]}</p>
                <span className='dot'></span>
                <p>{this.props.Data.process[2]}</p>
              </div>
              <hr/>
            </div>
            <div className='headers-container'>
              <h2 className='header-1'>{this.props.Data.header1}</h2>
              <h2 className='header-2'>{this.props.Data.header2}</h2>
              <h2 className='header-3'>{this.props.Data.header3}</h2>
            </div>
            <div className='body-container'>
              <p className='body-text body-text-1'>{this.props.Data.paragraph1}</p>
              <a className='read-more-btn' onClick={this.clickHandler} ref={elem => this.readMoreBtn = elem}>Read More</a>
              <p className='body-text body-text-2' ref={elem => this.bodyText2 = elem}>{this.props.Data.paragraph2}</p>
              <p className='body-text body-text-3' ref={elem => this.bodyText3 = elem}>{this.props.Data.paragraph3}</p>
            </div>
          </div>
        </div>
        <div className='hero-image-wrapper'>
          <div className='hero-image-container' ref={elem => this.heroContainer = elem}>
            <img className='hero-image' src={this.props.Data.heroImg} ref={elem => this.heroImage = elem}/>
            <p className='hero-image-caption'>{this.props.Data.imageCaption}</p>
          </div>
        </div>
        <ScrollIcon ref={elem => this.scrollIcon = elem}/>
      </div>
    )
  }
}
