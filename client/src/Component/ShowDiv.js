import React, { useContext } from 'react'
import { ReportContext } from '../Helper/ReportValues'
import ShowdivHeader from './ShowdivHeader'
import ShowDivBody from './ShowDivBody'
import { json } from 'react-router-dom'

const ShowDiv = () => {
  const {navitem,}=useContext(ReportContext)
  
  return (
    <div className='showdiv' key={navitem} >
     {navitem && <div >
      <ShowdivHeader/>
      <ShowDivBody/>
      
     </div>
} 
    </div>
  )
}

export default ShowDiv
