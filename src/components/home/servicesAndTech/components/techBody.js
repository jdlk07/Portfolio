import React, { Component } from 'react'
import { Transition } from 'react-transition-group'
import { TweenMax, TimelineLite } from 'gsap/all'

export default class servicesBody extends Component {
  constructor(props) {
    super(props)

    this.exitHandler = this.exitHandler.bind(this)

    this.myTween = null

    this.logoContainer = []
    this.logo = []

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
            .staggerFromTo(this.logoContainer, 0.2,{opacity: 0, scale: 0.7}, {
              opacity: 1,
              scale: 1,
              ease: 'Back.easeOut',
              stagger: {
                grid: 'auto',
                from: 'center',
                each: 0.1
              }
              })
            .staggerFromTo(this.logo, 0.5,{opacity: 0, y: '40%'}, {opacity: 1, y: '0%',ease: 'Back.easeOut'}, 0.1)
            show ? this.myTween.play() : this.myTween.reverse(0)
        }}>
        <div className='tech-body-container'>
          {this.props.data.map((logo, index) => {
            return (
              <div className='tech-logo-container' ref={elem => this.logoContainer[index] = elem}>
                <img className='tech-logo' src={logo} ref={elem => this.logo[index] = elem}/>
              </div>
            )
          })}
        </div>
    </Transition>
    )
  }
}
