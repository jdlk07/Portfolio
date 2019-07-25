import React, { Component } from 'react';
import './App.scss';

import Home from '../home/home'
import LoadingScreen from '../elements/loadingScreen/loadingScreen';

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loading: true,
      isMobile: ''
    }

    this.onLoadHandler = this.onLoadHandler.bind(this)
    this.screenSizeHandler = this.screenSizeHandler.bind(this)
  }

  onLoadHandler() {
    this.setState({ loading: false })
  }

  screenSizeHandler() {
    if (window.innerWidth > 980) {
      this.setState({ isMobile: false })
    } else {
      this.setState({ isMobile: true })
    }
  }

  componentDidMount() {
    this.screenSizeHandler()
    window.addEventListener('resize', this.screenSizeHandler)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.screenSizeHandler)
  }

  render() {
    return (
      <div className="App">
        <LoadingScreen loading={this.state.loading}/>
        <Home onLoadHandler={this.onLoadHandler} isMobile={this.state.isMobile}/>
      </div>
    )
  }
}

