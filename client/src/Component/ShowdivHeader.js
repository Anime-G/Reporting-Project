import React, { useContext } from 'react'
import { ReportContext } from '../Helper/ReportValues'
import { StarFilled } from '@ant-design/icons'
import Buttons from './Buttons'
const ShowdivHeader = () => {
    const {navitem,}=useContext(ReportContext)
  return (
    <div className='showdivheader'>
      <h3 style={{width:"50%"}} align="left">{navitem?.label} <StarFilled style={{color:"gold",border:"2px",filter:"drop-shadow(0 0 1px black)"}} /></h3>
        <Buttons/>
    </div>
  )
}

export default ShowdivHeader
