import React from 'react'

import classes from './SimpleComponent.module.sass'

const SimpleComponent: React.FC = React.memo((props: any) => {
  const handleClick = () => {
    console.log('props', props)
  }

  return (
    <>
      <button className={classes.btn} onClick={handleClick}>
        {props?.buttonText}
      </button>
      {props?.value}
    </>
  )
})

export default SimpleComponent
