import { Button, Card, Col, Row } from 'antd'
import React, { useContext } from 'react'
import { ReportContext } from '../Helper/ReportValues'
import { CloseCircleOutlined } from '@ant-design/icons'

const ReportColumn = () => {
    const {navitem,jsonData,columns,customize,setcolumns}=useContext(ReportContext)
    console.log(columns);
    const handleCheckboxChange = (item, value) => {
        setcolumns(
          columns.map((column) => {
            if (column.key === item.key) {
              return { ...item, hidden: value };
            } else {
              return column;
            }
          }),
        );
      };
    const data=columns.map(column=>{
        return (!column.hidden && <Col span={6} >
            <div className='columnblock'>
                {column.title}
                {customize && 
                <div  className='close' onClick={()=>handleCheckboxChange(column, !column.hidden)}><CloseCircleOutlined  style={{fontSize:"25px"}} /></div>
                }
            </div>
        </Col>)
    });
  return (
    <Card  bordered style={{boxShadow:"0 0 5px  black"}} className='reportcolumn'>
       <Row gutter={24}>
        {data}
       </Row>
    </Card>
  )
}

export default ReportColumn
