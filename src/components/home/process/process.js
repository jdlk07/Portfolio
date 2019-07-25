import React, { Component } from 'react'

import { ReactComponent as DesignIcon } from './media/designIcon.svg'
import { ReactComponent as CreateIcon } from './media/createIcon.svg'
import { ReactComponent as DeployIcon } from './media/deployIcon.svg'

const Icons = () => {
  const Icons = [
    {
      icon: DesignIcon,
      title: 'Design'
    },
    {
      icon: CreateIcon,
      title: 'Create'
    },
    {
      icon: DeployIcon,
      title: 'Deploy'
    }
  ]
  return(
    Icons.map((Icon, index) =>
      <div className='icon-wrapper' key={index}>
        <div className='svg-container'>
          <Icon.icon/>
        </div>
        <h2 className='icon-title'>{Icon.title}</h2>
      </div>
    )
  )
}

export default class Process extends Component {
  render() {
    return (
      <div className='process-wrapper banner-wrapper'>
        {/* <p className='banner-body-text'>{this.props.Data.bodyText[0]}<span>{this.props.Data.bodyText[1]}</span>{this.props.Data.bodyText[2]}</p> */}
        <div className='animations-wrapper'>
          <Icons/>
        </div>
      </div>
    )
  }
}
