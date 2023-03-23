import React from 'react'
import { AgGridReact } from 'ag-grid-react'
import { CellClickedEvent } from 'ag-grid-community'

import 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-alpine.css'

import SimpleComponent from './SimpleComponent'
import ButtonsPanel from './ButtonsPanel'
import CustomFilter from './CustomFilter'
import CustomFloatingFilter from './CustomFloatingFilter'

import { comparator, cellRendererSelector } from './helpers'
import { rowData } from './constants'

const App: React.FC = () => {
  const gridRef = React.useRef<AgGridReact>(null)

  const [columnDefs] = React.useState([
    {
      field: 'Id',
      filter: 'agNumberColumnFilter',
      cellRenderer: SimpleComponent,
      cellRendererParams: {
        buttonText: '№ ',
      },
    },
    {
      field: 'Name',
      filter: 'agTextColumnFilter',
      floatingFilter: true,
    },
    {
      field: 'Age',
      filter: CustomFilter,
      filterParams: {
        title: 'Custom filter',
        values: ['40', '34', '14', '3'],
      },
      floatingFilter: true,
      floatingFilterComponent: CustomFloatingFilter,
      width: 240,
    },
    { field: 'Email' },
    { field: 'Gender', cellRendererSelector },
    {
      field: 'DOB',
      filter: 'agDateColumnFilter',
      filterParams: { comparator },
    },
    { field: 'Country' },
    { field: 'City' },
  ])

  const defaultColDef = React.useMemo(
    () => ({
      sortable: true,
      filterParams: {
        debounceMs: 0,
      },
    }),
    [],
  )

  const cellClickedListener = React.useCallback((e: CellClickedEvent) => {
    console.log('cellClicked', e)
  }, [])

  return (
    <div className="ag-theme-alpine" style={{ height: 'calc(100vh - 50px)' }}>
      <ButtonsPanel gridRef={gridRef} />

      <AgGridReact
        ref={gridRef}
        popupParent={document.body}
        onCellClicked={cellClickedListener}
        columnDefs={columnDefs}
        rowData={rowData}
        rowSelection="multiple"
        animateRows={true}
        defaultColDef={defaultColDef}
      />
    </div>
  )
}

export default App
