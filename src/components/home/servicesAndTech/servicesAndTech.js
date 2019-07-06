import React, { Component } from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
import { TweenMax, TimelineLite } from 'gsap/all'


const ServiceItem = (props) => {
  return (
    <div className='service-item-container'>
      <h4 className='header'>{props.data.header}</h4>
      {props.data.body.map((item, index) =>
        <p className='body-text' key={index}>{item}</p>
      )}
    </div>
  )
}

const ServiceBody = (props) => {
  return (
    <div className='services-body-container'>
      {props.data.map((service, index) => {
        return (
          <ServiceItem data={service} key={index}/>
        )
      })}
    </div>
  )
}

const TechBody = (props) => {
  return (
    <div className='tech-body-container'>
      {props.data.map((logo, index) => {
        return (
          <div className='tech-logo-container'>
            <img className='tech-logo' src={logo}/>
          </div>
        )
      })}
    </div>
  )
}

const TextComponent = (props) => {
  return (
    <div className='text-component-container'>
      <a className={`text-component-header${props.show ? ' ' : ' inactive'}`} onClick={props.handler}>{props.data.header}</a>
      <Transition
        timeout={1000}
        mountOnEnter
        unmountOnExit
        appear
        in={props.show}
        addEndListener={(node, done) => {
          TweenMax.to(node, 0.5, {
            autoAlpha: props.show ? 1 : 0,
            x: props.show ? 0 : props.alternate ? '-40%' : '40%',
            onComplete: done,
          })
        }}
        >
        <div className='animated-container'>
          <h4 className='text-component-sub-header'>{props.data.subHeader}</h4>
          <p className='text-component-body-text body-text'>{props.data.body}</p>
        </div>
      </Transition>
    </div>
  )
}

export default class ServicesAndTech extends Component {
  constructor(props) {
    super(props)

    this.state = {
      servicesShow: true,
      techShow: false
    }

    this.techStateHandler = this.techStateHandler.bind(this)
    this.servicesStateHandler = this.servicesStateHandler.bind(this)
  }

  techStateHandler() {
    this.setState({servicesShow: false})
    setTimeout(()=>{this.setState({techShow: true})}, 200)
  }
  servicesStateHandler() {
    this.setState({techShow: false})
    setTimeout(()=>{this.setState({servicesShow: true})}, 200)
  }

  render() {
    console.log(this.state.alternate)
    return (
      <div className='services-and-tech-wrapper flex-wrapper'>
        <div className='services-and-tech-container width-limiter-container'>
          <div className='header-components-container'>
            <TextComponent data={this.props.Data.services.textComponent} show={this.state.servicesShow} handler={this.servicesStateHandler}/>
            <TextComponent data={this.props.Data.tech.textComponent} show={this.state.techShow} handler={this.techStateHandler} alternate/>
          </div>
          <div className='body-components-container'>
            <ServiceBody data={this.props.Data.services.servicesOffered}/>
            <TechBody data={this.props.Data.tech.techLogos}/>
          </div>
        </div>
      </div>
    )
  }
}
