import React, { useContext, useEffect, useState } from 'react'
import { ReportContext } from '../Helper/ReportValues';
import { FilterOutlined } from '@ant-design/icons';
import ReportColumn from './ReportColumn';
import ReportTable from './ReportTable';

const ShowDivBody = () => {

    const {navitem,customize,setCustomize,jsonData,setJsonData}=useContext(ReportContext)
    
    const fetchJsonData = async () => {
        
        try {
          const response = await fetch(window.location.origin+'/'+navitem.key);
          if (!response.ok) {
            throw new Error('Failed to fetch JSON data');
          }
          const data = await response.json();
          setJsonData(data[navitem.key.split('.')[0]]);
        } catch (error) {
          console.error('Error fetching JSON data:', error);
        }
      };
      useEffect(()=>{
        fetchJsonData();
      },[navitem])
    //   console.log(jsonData);
  return (
    <div style={{paddingLeft:10}} key={navitem} >
        <h4 align="left" >Report Columns</h4>
        <ReportColumn/>
        <ReportTable key={navitem}/>
    </div>
  )
}

export default ShowDivBody
