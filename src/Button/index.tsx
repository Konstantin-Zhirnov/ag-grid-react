import React from 'react'
import cn from 'classnames'

import classes from './Button.module.sass'

interface IProps {
  text: string
  onClick: () => void
  red?: boolean
}

const Button: React.FC<IProps> = React.memo(({ text, onClick, red }) => {
  return (
    <button className={cn(classes.container, { [classes.red]: red })} onClick={onClick}>
      {text}
    </button>
  )
})

export default Button
