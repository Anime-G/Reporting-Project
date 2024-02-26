import React, { useState } from 'react'
import Nav from './Nav'
import SideBar from './SideBar'
import ShowDiv from './ShowDiv'
import SelectedReportSlideBar from './SelectedReportSlideBar'
import { ReportContext } from '../Helper/ReportValues'

const MainComponent = () => {
  const [navitem,setNav]=useState(null);
  const [customize,setCustomize]=useState(false);
  const [jsonData, setJsonData] = useState(null);
  const [columns, setcolumns] = useState([]);
  const [tempcolumns, settempcolumns] = useState([]);
  return (
    <div style={{display:'flex',flexDirection:'column',height:"100%"}}>
      <Nav/>
      <ReportContext.Provider value={{tempcolumns, settempcolumns,navitem,setNav,customize,setCustomize,jsonData, setJsonData,columns, setcolumns}} >

      <div className='flexing' >
        {!customize?<SideBar />:<SelectedReportSlideBar/> }
        {/* <SideBar /> */}
        <ShowDiv/>
      </div>
      </ReportContext.Provider>
    </div>
  )
}

export default MainComponent
