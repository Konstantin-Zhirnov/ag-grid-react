import React from 'react'
import { AgGridReact } from 'ag-grid-react'

import Button from '../Button'

import classes from './ButtonsPanel.module.sass'

interface IProps {
  gridRef: React.RefObject<AgGridReact>
}

const ButtonsPanel: React.FC<IProps> = React.memo(({ gridRef }) => {
  const savedFilterState = React.useRef<{ [p: string]: any } | undefined>()

  const onSaveFilterButtonClick = React.useCallback(() => {
    savedFilterState.current = gridRef.current?.api.getFilterModel()
  }, [])

  const deselectButtonClick = React.useCallback(() => {
    gridRef.current?.api.deselectAll()
  }, [])

  const onApplyFilterButtonClick = React.useCallback(() => {
    const filterModel = savedFilterState.current
    gridRef.current?.api.setFilterModel(filterModel)
  }, [])

  const buttons = [
    { text: 'Deselect', onClick: deselectButtonClick },
    { text: 'Save filter parameters', onClick: onSaveFilterButtonClick },
    { text: 'Apply filter parameters', onClick: onApplyFilterButtonClick },
  ]

  return (
    <div className={classes.container}>
      {buttons.map((btn) => (
        <Button text={btn.text} onClick={btn.onClick} />
      ))}
    </div>
  )
})

export default ButtonsPanel
