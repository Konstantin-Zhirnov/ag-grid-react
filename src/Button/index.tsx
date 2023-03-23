import React from 'react'
import cn from 'classnames'

import classes from './Button.module.sass'

interface IProps {
  text: string
  onClick: () => void
  red?: boolean
  floating?: boolean
}

const Button: React.FC<IProps> = React.memo(({ text, onClick, red, floating }) => {
  return (
    <button
      className={cn(classes.container, { [classes.red]: red, [classes.floating]: floating })}
      onClick={onClick}
    >
      {text}
    </button>
  )
})

export default Button
