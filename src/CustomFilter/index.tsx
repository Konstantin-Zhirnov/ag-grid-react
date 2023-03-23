import React, { ForwardedRef } from 'react'

import Button from '../Button'

import classes from './CustomFilter.module.sass'

export default React.forwardRef((props: any, ref: ForwardedRef<any>) => {
  const [filterState, setFilterState] = React.useState('off')

  React.useImperativeHandle(ref, () => {
    return {
      isFilterActive() {
        return filterState !== 'off'
      },
      doesFilterPass(params: any) {
        const field = props.colDef.field

        return params.data[field] === filterState
      },
      getModel() {
        if (filterState === 'off') {
          return undefined
        }
        return {
          state: filterState,
        }
      },
      setModel(model: { state: React.SetStateAction<string> } | null) {
        if (model === null) {
          setFilterState('off')
        } else {
          setFilterState(model.state)
        }
      },
      getModelAsString() {
        return filterState === 'off' ? '' : filterState
      },
      setValue(value: string) {
        setFilterState(value)
      },
    }
  })

  const handleChange = React.useCallback(
    (value: string) => () => {
      setFilterState(value)
    },
    [],
  )

  React.useEffect(() => {
    props.filterChangedCallback()
  }, [filterState])

  return (
    <>
      <p className={classes.title}>{props.title}</p>
      <div className={classes.buttons}>
        <Button onClick={handleChange('off')} text="Reset" red />
        {props.values.map((text: string) => (
          <Button key={text} onClick={handleChange(text)} text={text} />
        ))}
      </div>
    </>
  )
})
