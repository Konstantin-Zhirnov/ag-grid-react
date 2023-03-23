import GenderIcon from './GenderIcon'

export const comparator = (dateFromFilter: Date, cellValue: string) => {
  if (cellValue == null) {
    return 0
  }

  const dateParts = cellValue.split('-')
  const day = Number(dateParts[2])
  const month = Number(dateParts[1]) - 1
  const year = Number(dateParts[0])
  const cellDate = new Date(year, month, day)

  if (cellDate < dateFromFilter) {
    return -1
  } else if (cellDate > dateFromFilter) {
    return 1
  }
  return 0
}

export const cellRendererSelector = (params: any) => {
  if (params.value === 'Male') {
    return { component: GenderIcon }
  }
  if (params.value === 'Female') {
    return { component: GenderIcon }
  }
}
