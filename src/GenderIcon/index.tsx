import React from 'react'
import { FaFemale, FaMale } from 'react-icons/fa'

const GenderIcon: React.FC = React.memo((props: any) => {
  return (
    <>
      {props.value === 'Male' ? <FaMale /> : <FaFemale />}
      &nbsp;
      {props.value}
    </>
  )
})

export default GenderIcon
