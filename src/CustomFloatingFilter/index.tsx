import React from 'react'

import Button from '../Button'

export default React.forwardRef((props: any) => {
  const allValues = props.filterParams.values

  const handleClick = React.useCallback(
    (value: string) => () => {
      props.parentFilterInstance((instance: any) => {
        instance.setValue(value)
      }, [])
    },
    [],
  )

  return (
    <>
      <Button onClick={handleClick('off')} text="Reset" red floating />
      {allValues.map((text: string) => (
        <Button key={text} onClick={handleClick(text)} text={text} floating />
      ))}
    </>
  )
})
