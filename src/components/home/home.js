import React from 'react'

import './home.scss'

import * as Data from './Data'

import Intro from './intro/intro'
import Process from './process/process'
import About from './about/about'

function Home() {
  return(
    <div className='home-wrapper'>
      <Intro Data={Data.Intro}/>
      <Process Data={Data.Process}/>
      <About Data={Data.About}/>
    </div>
  )
}

export default Home
