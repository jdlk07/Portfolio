import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import { TweenMax, TimelineLite } from 'gsap/all'

export default class servicesBody extends Component {
  constructor(props) {
    super(props)

    this.exitHandler = this.exitHandler.bind(this)

    this.myTween = null

    this.serviceContainer = []
    this.serviceHeader = []
    this.serviceBody = []

  }

  exitHandler(done) {
    done()
    //handler sets the parent state for techShow to trigger the entrance of the new component.
    this.props.exitHandler()
  }

  render() {
    const show = this.props.show
    return (
      <Transition
        mountOnEnter
        unmountOnExit
        appear
        in={show}
        addEndListener={(node, done) => {
          this.myTween = new TimelineLite({
            paused: true,
            onComplete: done,
            onReverseComplete: () => {
              this.exitHandler(done)
            }
          })
            .staggerFromTo(this.serviceContainer, 0.5,{opacity: 0, y: '-35%', rotationX: '360deg'}, {opacity: 1, y: '0%', rotationX: '0deg', ease: 'Power1.easeOut'}, 0.2)
            this.serviceHeader.map((header, index) => {
              this.myTween.fromTo(header, 0.2,{opacity: 0, y: '40%'}, {opacity: 1, y: '0%', ease: 'Power1.easeOut'})
              this.myTween.fromTo(this.serviceBody[index], 0.2,{opacity: 0, y: '40%'}, {opacity: 1, y: '0%', ease: 'Power1.easeOut'})
            })
            // .staggerFromTo(this.serviceHeader, 0.2,{opacity: 0}, {opacity: 1, ease: 'Power1.easeOut'}, 0.2)
            // .staggerFromTo(this.serviceBody, 0.2,{opacity: 0}, {opacity: 1, ease: 'Power1.easeOut'}, 0.2)
            show ? this.myTween.play() : this.myTween.reverse(0)
        }}>
        <div className='services-body-container'>
        {this.props.data.map((service, index) => {
          return (
            <div className='service-item-container' key={index} ref={elem => this.serviceContainer[index] = elem}>
              <h4 className='header' ref={elem => this.serviceHeader[index] = elem}>{service.header}</h4>
              <div className='body-text-container' ref={elem => this.serviceBody[index] = elem}>
                {service.body.map((item, index) =>
                  <p className='body-text' key={index}>{item}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </Transition>
    )
  }
}
