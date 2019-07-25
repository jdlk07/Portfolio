import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import { TweenMax } from 'gsap/all'
import VisibilitySensor from 'react-visibility-sensor'

import ServicesBody from './components/servicesBody'
import TechBody from './components/techBody'


const TextComponent = (props) => {
  return (
    <div className='text-component-container'>
      <h2 className={`text-component-header${props.show ? ' ' : ' inactive'}`} onClick={props.handler}>{props.data.header}</h2>
      <Transition
        appear
        in={props.show}
        addEndListener={(node, done) => {
          TweenMax.to(node, 1, {
            autoAlpha: props.show ? 1 : 0,
            x: props.show ? '0%' : props.alternate ? '30%' : '-30%',
            ease: 'Power2.easeOut',
            onComplete: done,
            delay: 1
          })
        }}
        >
        <div className='animated-container'>
          <h4 className='text-component-sub-header'>{props.data.subHeader}</h4>
          {/* <p className='text-component-body-text body-text'>{props.data.body}</p> */}
        </div>
      </Transition>
    </div>
  )
}


export default class ServicesAndTech extends Component {
  constructor(props) {
    super(props)

    this.state = {
      servicesShow: false,
      techShow: false,
      viewed: false
    }

    this.visibilityHandler = this.visibilityHandler.bind(this)
    this.techStateHandler = this.techStateHandler.bind(this)
    this.servicesStateHandler = this.servicesStateHandler.bind(this)
    this.techExitHandler = this.techExitHandler.bind(this)
    this.servicesExitHandler = this.servicesExitHandler.bind(this)
  }
  visibilityHandler(isVisible) {
    if (isVisible) {
      this.setState({
        servicesShow: true,
        viewed: true
      })
    }
  }

  techStateHandler() {
    this.setState({servicesShow: false})
    // setTimeout(() => {this.setState({techShow: true})}, 1500)
  }
  servicesStateHandler() {
    this.setState({techShow: false})
  }
  techExitHandler() {
    this.setState({servicesShow: true})
  }
  servicesExitHandler() {
    this.setState({techShow: true})
  }

  render() {
    return (
      <VisibilitySensor onChange={this.visibilityHandler} partialVisibility minTopValue={600} active={!this.state.viewed}>
        <div className='services-and-tech-wrapper flex-wrapper'>
          <div className='services-and-tech-container width-limiter-container'>
            <div className='header-components-container'>
              <TextComponent data={this.props.Data.services.textComponent} show={this.state.servicesShow} handler={this.servicesStateHandler}/>
              <TextComponent data={this.props.Data.tech.textComponent} show={this.state.techShow} handler={this.techStateHandler} alternate/>
            </div>
            <div className='body-components-container'>
              <ServicesBody data={this.props.Data.services.servicesOffered}
              show={this.state.servicesShow} exitHandler={this.servicesExitHandler}/>
              <TechBody data={this.props.Data.tech.techLogos}
              show={this.state.techShow} exitHandler={this.techExitHandler}/>
            </div>
          </div>
        </div>
      </VisibilitySensor>
    )
  }
}
