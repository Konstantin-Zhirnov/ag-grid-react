import React from 'react'
import Button from '../Button'

export default React.forwardRef((props: any, ref) => {
  const [value, setValue] = React.useState()

  const allValues = props.filterParams.values

  React.useImperativeHandle(ref, () => {
    return {
      onParentModelChanged(parentModel: any) {
        if (parentModel) {
          setValue(parentModel.state)
        } else {
          setValue(undefined)
        }
      },
    }
  })

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
