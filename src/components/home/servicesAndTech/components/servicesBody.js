import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import { TimelineLite } from 'gsap/all'

export default class servicesBody extends Component {
  constructor(props) {
    super(props)

    this.exitHandler = this.exitHandler.bind(this)

    this.myTween = null

    this.serviceContainer = []
    this.serviceText = []

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
            .staggerFromTo(this.serviceText, 0.8,{opacity: 0, y: '5%'}, {opacity: 1, y: '0%', ease: 'Power1.easeOut'}, 0.15)
            show ? this.myTween.play() : this.myTween.reverse(0)
        }}>
        <div className='services-body-container'>
        {this.props.data.map((service, index) => {
          return (
            <div className='service-item-container' key={index} ref={elem => this.serviceContainer[index] = elem}>
              <div className='text-container' ref={elem => this.serviceText[index] = elem}>
                <h4 className='header'>{service.header}</h4>
                <div className='body-text-container'>
                  {service.body.map((item, index) =>
                    <p className='body-text' key={index}>{item}</p>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </Transition>
    )
  }
}
